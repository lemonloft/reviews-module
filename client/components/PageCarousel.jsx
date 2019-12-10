/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const Container = styled.div`
display: flex;
flex-direction: row;
`;

const CurrentButton = styled.button`
outline:none;
border:none;
color: #FFFFFF;
font-size: 16px;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
:hover {
    text-decoration: underline;
}
width: 35px;
height: 38px;
background-color: #378187;
border-radius: 50%;
margin-left: 15px;
margin-right: 15px;
`;

const Button = styled.button`
outline:none;
border:none;
color: #378187;
font-size: 16px;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
:hover {
    text-decoration: underline;
}
width: 35px;
height: 38px;
background-color: #FFFFFF;
margin-left: 15px;
margin-right: 15px;
`;

const LeftButton = styled.button`
outline:none;
border:none;
color: #378187;
padding-top: 3.5px;
font-size: 16px;
width: 35px;
height: 38px;
background-color: #FFFFFF;
margin-right: 15px;
`;

const RightButton = styled.button`
outline:none;
border:none;
color: #378187;
padding-top: 3.5px;
font-size: 16px;
width: 35px;
height: 38px;
background-color: #FFFFFF;
margin-left: 15px;
`;

const ThreeDots = styled.div`
padding-top: 5px;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
margin-left: 15px;
margin-right: 15px;
`;

class PageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const pageNum = this.props.searchBool? this.props.serPageNum : this.props.revPageNum;
    const end = this.props.end;

    let leftButton = (
      <LeftButton>
        <IconContext.Provider value={{ color: "#378187"}}>
          <AiOutlineLeftCircle size={30} onClick={this.props.leftPageNum}/>
        </IconContext.Provider>
      </LeftButton>
    );

    let rightButton = (
      <RightButton>
        <IconContext.Provider value={{ color: "#378187"}}>
          <AiOutlineRightCircle size={30} onClick={this.props.rightPageNum} />
        </IconContext.Provider>
      </RightButton>
    );

    let threeDots = (
      <ThreeDots>...</ThreeDots>
    );

    const createButton = (num) => {
        return (
            (num === pageNum) ? 
            <CurrentButton value={num} onClick={()=>{this.props.changePageNum(num)}} type="submit">{num}</CurrentButton> :
            <Button value={num} onClick={()=>{this.props.changePageNum(num)}} type="submit">{num}</Button>
        )
    }

    if (pageNum === 1) {
      return (
        <Container>
            {createButton(1)}
            {(end >= 2) && createButton(2)}
            {(end >= 3) && createButton(3)}
            {(end >= 4) && threeDots}
            {(end >= 4) && createButton(end)}
            {(end >= 2) && rightButton}      
        </Container>
      )
    } else if (pageNum === 2) {
        return (
          <Container>
              {leftButton}
              {createButton(1)}
              {createButton(2)}
              {(end >= 3) && createButton(3)}
              {(end >= 4) && threeDots}
              {(end >= 4) && createButton(end)}
              {(end >= 3) && rightButton}      
          </Container>
        )
      } else if (pageNum === 3) {
        return (
          <Container>
            {leftButton}
            {createButton(1)}
            {createButton(2)}
            {createButton(3)}
            {(end >= 4) && createButton(4)}
            {(end >= 5) && threeDots}
            {(end >= 5) && createButton(end)}
            {(end >= 4) && rightButton}      
          </Container>
        )
      } else if (pageNum === 4) {
        return (
          <Container>
            {leftButton}
            {createButton(1)}
            {createButton(2)}
            {createButton(3)}
            {createButton(4)}
            {(end >= 5) && createButton(5)}
            {(end >= 6) && threeDots}
            {(end >= 6) && createButton(end)}
            {(end >= 5) && rightButton}      
          </Container>
        )
      } else if ((pageNum - 4 >= 1) && (pageNum + 4 <= end)) {
        return (
          <Container>
            {leftButton}
            {createButton(1)}
            {threeDots}
            {createButton(pageNum - 1)}
            {createButton(pageNum)}
            {createButton(pageNum + 1)}
            {threeDots}
            {createButton(end)}
            {rightButton}
          </Container>
        );
      } else if (pageNum === end - 3) {
        return (
          <Container>
            {leftButton}
            {createButton(1)}
            {(pageNum > 2) && threeDots}
            {(pageNum > 2) && createButton(end - 4)}
            {createButton(end - 3)}
            {createButton(end - 2)}
            {createButton(end - 1)}
            {createButton(end)}
            {rightButton}      
          </Container>
        )
      } else if (pageNum === end - 2) {
        return (
          <Container>
            {leftButton}
            {createButton(1)}
            {(pageNum > 3) && threeDots}
            {createButton(end - 3)}
            {createButton(end - 2)}
            {createButton(end - 1)}
            {createButton(end)}
            {rightButton}      
          </Container>
        )
      } else if (pageNum === end - 1) {
        return (
          <Container>
            {leftButton}
            {createButton(1)}
            {threeDots}
            {createButton(end - 2)}
            {createButton(end - 1)}
            {createButton(end)}
            {rightButton}      
          </Container>
        )
      } else if (pageNum === end) {
        return (
          <Container>
            {leftButton}
            {createButton(1)}
            {threeDots}
            {createButton(end - 2)}
            {createButton(end - 1)}
            {createButton(end)}
          </Container>
        )
      } else {
          return (<div/>)
      }
    }
}

export default PageCarousel;
