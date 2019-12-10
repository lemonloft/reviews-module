import React from 'react';
import styled from 'styled-components';
import { FaHandHoldingHeart, FaCouch } from "react-icons/fa";
import { GiVacuumCleaner, GiCoffeeCup } from "react-icons/gi";
import { IconContext } from "react-icons";
import { TiMessages } from "react-icons/ti";


const Container = styled.ul`
margin-top: 15px;
width: 544px;
height: 90px;
padding: 10px;

display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 1fr 1fr 1fr;
`;

const List = styled.li`
display: flex;
flex-direction: row;
`;

const RightMarg = styled.div`
`;

const LeftMarg = styled.div`
margin-left: 5px;
`;

const AlignRight = styled.div`
display: flex;
flex-direction: row;
margin-left: auto;
margin-right: 30px;
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
          <AlignRight>
            <IconContext.Provider value={{ color: "#378187"}}>
              <GiVacuumCleaner />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[0]}</LeftMarg>
          </AlignRight>
        </List>

        <List>
          <RightMarg>{this.state.order[1]}</RightMarg>
          <AlignRight>
            <IconContext.Provider value={{ color: "#FCAC2E"}}>
              <TiMessages />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[1]}</LeftMarg>
          </AlignRight>
        </List>

        <List>
          <RightMarg>{this.state.order[2]}</RightMarg>
          <AlignRight>
            <IconContext.Provider value={{ color: "#FB5058"}}>
              <FaCouch />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[2]}</LeftMarg>
          </AlignRight>
        </List>

        <List>
          <RightMarg>{this.state.order[3]}</RightMarg>
          <AlignRight>
            <IconContext.Provider value={{ color: "#FB5058"}}>
              <FaHandHoldingHeart />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[3]}</LeftMarg>
          </AlignRight>
        </List>

        <List>
          <RightMarg>{this.state.order[4]}</RightMarg>
          <AlignRight>
            <IconContext.Provider value={{ color: "#FCAC2E"}}>
              <GiCoffeeCup />
            </IconContext.Provider>
            <LeftMarg>{this.props.staticData.hearts[4]}</LeftMarg>
          </AlignRight>
        </List>

      </Container>
    );
  }
}

export default StaticVote;
