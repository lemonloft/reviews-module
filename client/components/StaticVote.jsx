import React from 'react';
import styled from 'styled-components';
import { FaHandHoldingHeart, FaCouch } from "react-icons/fa";
import { GiVacuumCleaner, GiCoffeeCup } from "react-icons/gi";
import { IconContext } from "react-icons";
import { TiMessages } from "react-icons/ti";


const Container = styled.ul`
margin: auto;

width: 544px;
height: 90px;

display: grid;
grid-template-columns: 50% 50%;
`;

const List = styled.li`
display: flex;
flex-direction: row;
`;

const RightMarg = styled.div`
margin-right: 13px;
`;

const LeftMarg = styled.div`
margin-left: 3px;
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
          {/* {Object.keys(this.state.order).map((data)=> (
            <List key={data}>
              <div>{this.state.order[data]} {this.props.staticData.hearts[data]}</div>
            </List>
          ))} */}
          <List>
            <RightMarg>{this.state.order[0]}</RightMarg>
            <IconContext.Provider value={{ color: "#378187"}}>
                <GiVacuumCleaner />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[0]}</LeftMarg>
          </List>
          <List>
            <RightMarg>{this.state.order[1]}</RightMarg>
            <IconContext.Provider value={{ color: "#FCAC2E"}}>
                <TiMessages />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[1]}</LeftMarg>
          </List>
          <List>
            <RightMarg>{this.state.order[2]}</RightMarg>
            <IconContext.Provider value={{ color: "#FB5058"}}>
                <FaCouch />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[2]}</LeftMarg>
          </List>
          <List>
            <RightMarg>{this.state.order[3]}</RightMarg>
            <IconContext.Provider value={{ color: "#FB5058"}}>
                <FaHandHoldingHeart />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[3]}</LeftMarg>
          </List>
          <List>
            <RightMarg>{this.state.order[4]}</RightMarg>
            <IconContext.Provider value={{ color: "#FCAC2E"}}>
                <GiCoffeeCup />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[4]}</LeftMarg>
          </List>
        </Container>
    );
  }
}

export default StaticVote;
