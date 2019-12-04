import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
font-family: circular, Roboto, "Helvetica Neue", sans-serif;
`;

class Reviews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Body>
                <div>Reviews</div>
                {this.props.allState.data.map((data) =>{
                    return (
                        <div key={data._id}>
                            <div>
                                <a href="/">
                                    <img src={data.image} height="40" width="40"></img>
                                </a>
                                {data.name}
                                <div>{data.date}</div>
                            </div>
                            <div>margin-top: 24px; margin-bottom: 24px;</div>
                            <div>
                                <span>
                                    {data.body}
                                </span>
                                <button>read more</button>
                            </div>
                            <div>margin-top: 24px; margin-bottom: 24px;</div>
                        </div>

                    );}
                )}
            </Body>
        );
    }
}

// p{font-family:"Times New Roman", Times, serif;}
// circular, Roboto, "Helvetica Neue", sans-serif;
export default Reviews;