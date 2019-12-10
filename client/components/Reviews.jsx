/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import HostResponse from './HostResponse.jsx';
import PageCarousel from './PageCarousel.jsx';

const Avatar = styled.img`
border-radius: 50%;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
`;

const Review = styled.div`
margin-bottom: 24px;
`;

const ReviewText = styled.div`
width: 594px;
`

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

const HorLine = styled.div`
  width: 594px;
  border-bottom: 1px solid #BEBEBE;
  margin-top: 25px;
`;

const Margin = styled.div`
margin-top: 10px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isClicked: this.props.data.map((data) => {return false}),
        revPageNum: 1,
        serPageNum: 1,
    };
  }

  resetSerPageNum() {
    this.setState({
        serPageNum: 1,
    });
  }

  getProperDate(dateString) {
    const monthNames = [
      '', 'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December',
    ];
    const date = new Date(dateString);
    return `${monthNames[date.getMonth()] } ${date.getFullYear()}`;
  }

  changeReadmoreStatus(e, index) {
    let oldIsClicked = this.state.isClicked.slice();
    let newIsClicked = oldIsClicked.map((data, i) => {
        if (i === index) {
            return true;
        }
        return data;
    })
    this.setState({
        isClicked: newIsClicked,
    });
  }

  changePageNum(pageNum) {
    if (!this.props.searchBool) {
        window.scroll({top: 400, left: 0, behavior: 'smooth' });
        this.setState({
          revPageNum: pageNum,
        })
    } else if (this.props.searchBool) {
        window.scroll({top: 100, left: 0, behavior: 'smooth' });
        this.setState({
          serPageNum: pageNum,
        })    
    }
  }

  leftPageNum() {
    if (!this.props.searchBool) {
        window.scroll({top: 400, left: 0, behavior: 'smooth' });
        let rPN = this.state.revPageNum;
        this.setState({
          revPageNum: rPN - 1,
        })
    } else if (this.props.searchBool) {
        window.scroll({top: 100, left: 0, behavior: 'smooth' });
        let sPN = this.state.serPageNum;
        this.setState({
          serPageNum: sPN - 1,
        })   
    }
  }

  rightPageNum() {
    if (!this.props.searchBool) {
        window.scroll({top: 400, left: 0, behavior: 'smooth' });
        let rPN = this.state.revPageNum;
        this.setState({
          revPageNum: rPN + 1,
        })
    } else if (this.props.searchBool) {
        window.scroll({top: 100, left: 0, behavior: 'smooth' });
        let sPN = this.state.serPageNum;
        this.setState({
          serPageNum: sPN + 1,
        })   
    }
  }

  render() {
    let pageNum = this.props.searchBool ? this.state.serPageNum : this.state.revPageNum;
    let pageData = this.props.data.slice((pageNum-1)*7, pageNum*7);
    return (
      <Body>
        {pageData.map((data, index) => (
          <Review key={data._id}>
            <HorizontalTest>
                <a href="/">
                    <Avatar src={data.image} height='40px' width='40px' />
                </a>
                <VerticalTest>
                  <div><b>{data.name}</b></div>
                  <span>{this.getProperDate(data.date)}</span>
                </VerticalTest>
            </HorizontalTest>
            <Margin />
            <ReviewText>
                <span>
                {data.body.length <= 275 &&
                    data.body
                }
                {data.body.length > 275 &&
                (this.state.isClicked[index] ? data.body.slice(0,275) + data.body.slice(275).split(' ')[0] : data.body.slice(0,275) + data.body.slice(275).split(' ')[0] + '...')
                }
                {data.body.length > 275 &&
                    (this.state.isClicked[index] ? (' ' + data.body.slice(275).split(' ').slice(1).join(' ')) : (<ReviewButton onClick={(e)=>{this.changeReadmoreStatus(e, index)}}>Read more</ReviewButton>))
                }
                <HostResponse data={data} />
                <HorLine />
                </span>
            </ReviewText>
          </Review>
        ))}
        <PageCarousel searchBool={this.props.searchBool} changePageNum={this.changePageNum.bind(this)} serPageNum={this.state.serPageNum} revPageNum={this.state.revPageNum} end={Math.ceil(this.props.data.length/7)} leftPageNum={this.leftPageNum.bind(this)} rightPageNum={this.rightPageNum.bind(this)} />
      </Body>
    );
  }
}

export default Reviews;
