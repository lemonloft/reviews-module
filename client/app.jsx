import React from 'react';
import { ajax } from 'jquery';
import Reviews from './components/Reviews.jsx';

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

        // cleanliness, communication, checkin, accuracy, location, value
        let ratings = [0, 0, 0, 0, 0, 0];
        // spaCle, quiRes, stySpa, outHos, amaAme
        let hearts = [0, 0, 0, 0, 0];

        for (let i = 0; i < length; i += 1) {
          ratings[0] += result[i].cleanliness;
          ratings[1] += result[i].communication;
          ratings[2] += result[i].checkin;
          ratings[3] += result[i].accuracy;
          ratings[4] += result[i].location;
          ratings[5] += result[i].value;
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
            ratings: ratings.map((x) => (x / length).toFixed(1)),
            hearts,
          },
        });
        console.log(this.state);
      },
    });
  }

  render() {
    return (
      <div>
        <Reviews allState={this.state} />
      </div>
    );
  }
}

export default App;
