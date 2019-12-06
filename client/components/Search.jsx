import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
margin-top: 10px;
margin-bottom: 10px;
`;

const Input = styled.input`
width: 334px;
height: 34px;
`

const Button = styled.input`
width: 35px;
height: 34px;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Form>
        <Input type="text" name="SearchReview" value="Search reviews"></Input>
        <Button type="submit" value="Submit"></Button>
      </Form>
    );
  }
}

export default Search;
