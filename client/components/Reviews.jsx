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
        <h2>Reviews</h2>
        {this.props.data.map((data) => (
          <Review key={data._id}>
            <HorizontalTest>
                <a href="/">
                    <Avatar src={data.image} height='48px' width='48px' />
                </a>
                <VerticalTest>
                  <div>{data.name}</div>
                  <span>{this.getProperDate(data.date)}</span>
                </VerticalTest>
            </HorizontalTest>
            <ReviewText>
                <span>
                    {data.body}
                </span>
                <button>read more</button>
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
