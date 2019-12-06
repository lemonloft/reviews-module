/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
border-radius: 50%;
`

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
`

const VerticalTest = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;

justify-content: center;
`

class Reviews extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <Body>
        {this.props.data.map((data) => (
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
            <ReviewText>
                <span>
                {data.body.length <= 275 &&
                    data.body
                }
                {data.body.length > 275 &&
                    (()=>{
                        data.body.slice(0,275) + data.body.slice(275).split(' ')[0];
                        data.body.slice(275).split(' ').slice(1).join(' ');
                    return data.body.slice(0,275) + data.body.slice(275).split(' ')[0];
                  })()
                }
                {data.body.length > 275 &&
                    <button>button</button>
                }
                </span>
            </ReviewText>
          </Review>
        ))}
      </Body>
    );
  }
}

// p{font-family:"Times New Roman", Times, serif;}
// circular, Roboto, "Helvetica Neue", sans-serif;
export default Reviews;
