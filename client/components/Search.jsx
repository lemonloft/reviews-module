import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
margin-top: 10px;
margin-bottom: 10px;
border-radius: 12px;
display: flex;
flex-direction: row;
`;

const Input = styled.input`
width: 334px;
height: 34px;
border-right-style: none;
font-size: 16px;
`;

const Button = styled.button`
width: 35px;
height: 34px;
background-color: #FFFFFF;
`;

const BackToAll = styled.div`
width: 594px;
display: flex;
flex-direction: row;
`;

const BackButton = styled.div`
outline:none;
border:none;
font-size: 16px;
padding: 0;
margin-left: auto;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
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
              <BackToAll>
                <div>{this.props.state.data.length} guests have mentioned “{this.props.state.searchVal}”</div>
                <BackButton onClick={this.props.handleBackToOriginalList}>Back to all reviews</BackButton>
              </BackToAll>
            ) : (
              <Form onSubmit={this.props.handleSearchChange}>
                <Input type="text" placeholder="Search reviews"></Input>
                <Button type="submit" value="Go!"></Button>
              </Form>
            )}
        </div>
    );
  }
}

export default Search;
