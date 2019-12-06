import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
margin: auto;

width: 544px;
height: 90px;

display: grid;
grid-template-columns: 50% 50%;
`;

const List = styled.li`
list-style-type: none;
`;


class StaticVote extends React.Component {
// spaCle, quiRes, stySpa, outHos, amaAme
  constructor(props) {
    super(props);
    this.state = {
      order: {
        0: 'Sparkling clean',
        1: 'Quick responses',
        2: 'Stylish space',
        3: 'Outstanding hospitality',
        4: 'Amazing amenities',
      },
    };
  }

  render() {
    return (
        <Container>
          {Object.keys(this.state.order).map((data)=> (
            <List key={data}>
              <div>{this.state.order[data]} {this.props.staticData.hearts[data]}</div>
            </List>
          ))}
        </Container>
    );
  }
}

export default StaticVote;
