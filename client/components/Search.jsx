import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { FiSearch } from "react-icons/fi";

const Form = styled.form`
margin-top: 25px;
margin-bottom: 25px;
border-radius: 12px;
display: flex;
flex-direction: row;
`;

const Input = styled.input`
width: 334px;
height: 34px;
border-style: solid;
border-width: 1px;
border-radius: 5px 0px 0px 5px;
border-color: #BEBEBE;
border-right-style: none;
font-size: 16px;
`;

const Button = styled.button`
width: 35px;
height: 38px;
background-color: #FFFFFF;
border-style: solid;
border-width: 1px;
border-radius: 0px 5px 5px 0px;
border-color: #BEBEBE;
border-left-style: none;
padding-top: 4px;
padding-right: 6px;
`;

const BackToAll = styled.div`
width: 594px;
display: flex;
flex-direction: row;
margin-top: 5px;
margin-bottom: 20px;
`;

const BackButton = styled.div`
outline:none;
border:none;
font-size: 16px;
margin-left: auto;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
`;

const HorLine = styled.div`
  width: 594px;
  border-bottom: 1px solid #BEBEBE;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const FlexCol = styled.div`
display: flex;
flex-direction: column;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
          {this.props.state.searchBool ?
            (
            <FlexCol>
              <BackToAll>
                <div>{this.props.state.data.length} guests have mentioned “{this.props.state.searchVal}”</div>
                <BackButton onClick={this.props.handleBackToOriginalList}>Back to all reviews</BackButton>
              </BackToAll>
              <HorLine />
            </FlexCol>
            ) : (
              <Form onSubmit={this.props.handleSearchChange}>
                <Input type="text" placeholder=" Search reviews"></Input>
                <Button type="submit" value="Go!">
                  <IconContext.Provider value={{ color: "#BEBEBE"}}>
                    <FiSearch size={17} />
                  </IconContext.Provider>
                </Button>
              </Form>
            )}
        </div>
    );
  }
}

export default Search;
