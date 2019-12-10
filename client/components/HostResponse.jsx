/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
border-radius: 50%;
`;

const Response = styled.div`
width: 522px;
display: flex;
flex-direction: column;
margin-top: 15px;
margin-left: 20px;
`;

const HorizontalTest = styled.div`
display: flex;
flex-direction: row;
`;

const VerticalTest = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;

justify-content: center;
`;

const Margin = styled.div`
margin-top: 10px;
`;

const ResponseText = styled.div`
width: 594px;
`;

const ReviewButton = styled.button`
outline:none;
border:none;
color: #378187;
font-size: 16px;
padding: 0;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
:hover {
    text-decoration: underline;
}
`;

class HostResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  getProperDate(dateString) {
    const monthNames = [
      '', 'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December',
    ];
    const date = new Date(dateString);
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  }

  changeReadmoreStatusHost(e) {
    const newClicked = !this.state.isClicked;
    this.setState({
      isClicked: newClicked,
    });
  }

  render() {
    if (this.props.data.hostRes){
        return (
          <Response>
              <HorizontalTest>
              <a href="/">
                  <Avatar src={this.props.data.hostImage} height="40px" width="40px" />
                </a>
              <VerticalTest>
                  <div><b>Response from {this.props.data.hostName}:</b></div>
                  <span>{this.getProperDate(this.props.data.hostResDate)}</span>
                </VerticalTest>
            </HorizontalTest>
              <Margin />
              <ResponseText>
              <span>
                  {this.props.data.hostRes.length <= 275
                    && this.props.data.hostRes}
                  {this.props.data.hostRes.length > 275
                    && (this.state.isClicked ? this.props.data.hostRes.slice(0,275) + this.props.data.hostRes.slice(275).split(' ')[0] : this.props.data.hostRes.slice(0,275) + this.props.data.hostRes.slice(275).split(' ')[0] + '...')
                  }
                  {this.props.data.hostRes.length > 275
                    && (this.state.isClicked ? (` ${  this.props.data.hostRes.slice(275).split(' ').slice(1).join(' ')}`) : (<ReviewButton onClick={(e) => { this.changeReadmoreStatusHost(e) ;}}>Read more</ReviewButton>))}
                </span>
              </ResponseText>
            </Response>
        );
    } else {
        return (<div/>)
    }
  }
}

export default HostResponse;
