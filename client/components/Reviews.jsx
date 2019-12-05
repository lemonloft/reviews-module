import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
font-family: circular, Roboto, "Helvetica Neue", sans-serif;
`;

const Review = styled.div`
margin-top: 24px; 
margin-bottom: 24px;
`;

class Reviews extends React.Component {
    constructor(props) {
        super(props);
    }

    getProperDate(dateString) {
        var monthNames = [
            "", "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var date = new Date(dateString);
        return monthNames[date.getMonth()] + ' ' + date.getFullYear();
    }

    render() {

        return (
            <Body>
                <div>Reviews</div>
                {this.props.allState.data.map((data) =>{
                    return (
                        <Review key={data._id}>
                            <div>
                                <a href="/">
                                    <img src={data.image} height="40" width="40"></img>
                                </a>
                                {data.name}
                                <div>{this.getProperDate(data.date)}</div>
                            </div>
                            <div>
                                <span>
                                    {data.body}
                                </span>
                                <button>read more</button>
                            </div>
                        </Review>
                    );}
                )}
            </Body>
        );
    }
}

// p{font-family:"Times New Roman", Times, serif;}
// circular, Roboto, "Helvetica Neue", sans-serif;
export default Reviews;