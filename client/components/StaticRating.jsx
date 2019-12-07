import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
margin-top: 30px;
width: 544px;
height: 90px;
padding: 0;

display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 1fr 1fr 1fr;
`;

const List = styled.li`
list-style-type: none;
`;


class StaticRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        1: 'Cleanliness',
        2: 'Communication',
        3: 'Check-in',
        4: 'Accuracy',
        5: 'Location',
        6: 'Value',
      },
    };
  }

  render() {
    return (
      <Container>
        {Object.keys(this.state.order).map((data)=> (
          <List key={data}>
            <div>{this.state.order[data]} {this.props.staticData.ratings[data]}</div>
          </List>
        ))}
      </Container>
    );
  }
}

export default StaticRating;