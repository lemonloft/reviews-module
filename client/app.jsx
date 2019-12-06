import React from 'react';
import { ajax } from 'jquery';
import Reviews from './components/Reviews.jsx';
import StaticRating from './components/StaticRating.jsx';
import StaticVote from './components/StaticVote.jsx';
import { IoIosStar } from "react-icons/io";
import styled from 'styled-components';

const Body = styled.div`
font-family: circular, Roboto, "Helvetica Neue", sans-serif;
`;

const Container = styled.ul`
display: grid;
grid-template-rows: 49% 2% 49%;
width: 594px;
height: 275px;

border-style: solid;
border-width: 1px;
border-radius: 5px;
border-color: #BEBEBE;
`;

const Line = styled.div`
  width: 544px;
  border-bottom: 1px solid #BEBEBE;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.renderView();
  }

  renderView() {
    let url = 'http://localhost:3000/api/reviews';
    if (window.location.pathname.length > 1) {
      url += window.location.pathname;
    }
    ajax({
      url,
      method: 'GET',
      success: (data) => {
        const result = data[0];
        let length = result.length;

        // rating, cleanliness, communication, checkin, accuracy, location, value
        let ratings = [0, 0, 0, 0, 0, 0, 0];
        // spaCle, quiRes, stySpa, outHos, amaAme
        let hearts = [0, 0, 0, 0, 0];

        for (let i = 0; i < length; i += 1) {
          ratings[0] += result[i].rating;
          ratings[1] += result[i].cleanliness;
          ratings[2] += result[i].communication;
          ratings[3] += result[i].checkin;
          ratings[4] += result[i].accuracy;
          ratings[5] += result[i].location;
          ratings[6] += result[i].value;
          if (result[i].spaCle === 1) {
            hearts[0] += 1;
          }
          if (result[i].quiRes === 1) {
            hearts[1] += 1;
          }
          if (result[i].stySpa === 1) {
            hearts[2] += 1;
          }
          if (result[i].outHos === 1) {
            hearts[3] += 1;
          }
          if (result[i].amaAme === 1) {
            hearts[4] += 1;
          }
        }

        this.setState({
          data: data[0],
          staticData: {
            ratings: ratings.map((x, i) => {
              if (i === 0) {
                return (x / length).toFixed(2);
              }
              return (x / length).toFixed(1);
            }),
            hearts,
          },
        });
        console.log(this.state);
      },
    });
  }

  render() {
    if (!this.state.staticData) {
      return (
        <div> </div>
      );
    }
    if (this.state.staticData) {
      return (
        <Body>
          <h2>
            <span><IoIosStar value={{ color: 'blue' }}/></span>
            {this.state.staticData.ratings[0]} ({this.state.data.length} reviews)
          </h2>
          <Container>
            <StaticRating staticData={this.state.staticData} />
            <Line />
            <StaticVote staticData={this.state.staticData} />
          </Container>
          <Reviews data={this.state.data} staticData={this.state.staticData} />
        </Body>
      );
    }
  }
}

export default App;
