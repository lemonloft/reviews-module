import React from 'react';
import { ajax } from 'jquery';
import styled from 'styled-components';
import Reviews from './components/Reviews.jsx';
import StaticRating from './components/StaticRating.jsx';
import StaticVote from './components/StaticVote.jsx';
import Search from './components/Search.jsx';

//
import { connect } from 'react-redux';
import { fetchReviews } from './actions/reviewActions.jsx';
import { changeSearchBool } from './actions/searchBoolActions.jsx';
//


const Body = styled.div`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
float: right;
`;

const Container = styled.ul`
display: grid;
grid-template-rows: 49% 2% 49%;
width: 594px;
height: 275px;

border-style: solid;
border-width: 1px;
border-radius: 12px;
border-color: rgb(228, 231, 231);
margin-left: 0px;
`;

const ReviewsHeader = styled.h3`
display: flex;
`;

const HorLine = styled.div`
width: 544px;
border-bottom: 1px solid rgb(228, 231, 231);
`;

const VerLine = styled.div`
height: 15px;
border-left: 1px solid rgb(228, 231, 231);
margin-right: 15px;
margin-top: 5px;
`;

const FlexSpan = styled.span`
display: flex;
flex-direction: row;
margin-right: 15px;
`;

const STAR = styled.div`
color: rgb(0, 166, 153);
font-size: 15px;
margin-top: 2px;
margin-right: 3px;
`;

const FlexRow = styled.div`
display: flex;
flex-direction: row;
`;

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.reviews = React.createRef();
    // this.state = {
    //   data: [],
    //   searchBool: false,
    // };
  }

  
  // componentDidMount() {
  componentWillMount() {
    // this.renderView();
    this.props.fetchReviews();
  }

  handleSearchChange(e) {
    e.preventDefault();
    const inValid = /^\s+$/;
    const k = inValid.test(e.target[0].value);
    if (!this.props.searchBool && (e.target[0].value.length > 0) && (!k)) {
      window.scroll({ top: 1440, left: 0, behavior: 'smooth' });
      const originalList = this.props.reviews[0].slice();
      const newList = this.props.reviews[0].filter(data => data.body.toLowerCase().includes(e.target[0].value.toLowerCase()));
      const searchBool = this.props.searchBool;
      this.setState({
        originalList,
        data: newList,
        searchBool: !searchBool,
        searchVal: e.target[0].value,
      });
      e.target[0].value = '';
    }
  }

  handleBackToOriginalList() {
    this.reviews.current.resetSerPageNum();
    if (this.props.searchBool) {
      const originalList = this.props.originalList;
      const searchBool = this.props.searchBool;
      this.setState({
        data: originalList,
        searchBool: !searchBool,
        searchVal: '',
      });
    }
  }

  render() {
    if (this.props.reviews.length === 0) {
      return (
        <div> </div>
      );
    } else {
      return (
        <Body>
          <h2>Reviews</h2>

          <ReviewsHeader>
            <FlexSpan>
              <FlexRow>
                <STAR>&#9733;</STAR>
                {this.props.reviews[1].ratings[0]} 
              </FlexRow>
            </FlexSpan>
            <VerLine />
            <div>{this.props.searchBool ? this.props.originalList.length : this.props.reviews[0].length} reviews</div>
          </ReviewsHeader>

          {this.props.searchBool ? (<div />) : (
            <Container>
              <StaticRating staticData={this.props.reviews[1]} />
              <HorLine />
              <StaticVote staticData={this.props.reviews[1]} />
            </Container>
          )}

          <Search state={this.props} handleSearchChange={this.handleSearchChange.bind(this)} handleBackToOriginalList={this.handleBackToOriginalList.bind(this)}/>

          <Reviews ref={this.reviews} searchBool={this.props.searchBool} data={this.props.reviews[0]} staticData={this.props.reviews[1]}/>
        </Body>
      );
    }
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.data,
  searchBool: state.searchBool.searchBool,
});

export default connect(mapStateToProps, { fetchReviews, changeSearchBool })(ReviewsModule);
