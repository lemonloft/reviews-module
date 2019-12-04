import React from 'react';
import {ajax} from 'jquery';
import Reviews from './components/Reviews.jsx'

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
        var url = 'http://localhost:3000/api/reviews';
        // console.log(window.location.pathname);
        if (window.location.pathname.length > 1) {
            url += window.location.pathname;
        }
        // console.log(url);
        ajax ({
            url: url,
            method: 'GET',
            success: data => {
                // console.log(data);
                var result = data[0];
                var length = result.length;
    
                // cleanliness, communication, checkin, accuracy, location, value
                var ratings = [0, 0, 0, 0, 0, 0];
                // spaCle, quiRes, stySpa, outHos, amaAme
                var hearts = [0, 0, 0, 0, 0];
    
                for (var i = 0; i < length; i++) {
                    ratings[0] += result[i].cleanliness;
                    ratings[1] += result[i].communication;
                    ratings[2] += result[i].checkin;
                    ratings[3] += result[i].accuracy;
                    ratings[4] += result[i].location;
                    ratings[5] += result[i].value;
                    if (result[i].spaCle === 1) {
                        hearts[0]++
                    }
                    if (result[i].quiRes === 1) {
                        hearts[1]++
                    }
                    if (result[i].stySpa === 1) {
                        hearts[2]++
                    }
                    if (result[i].outHos === 1) {
                        hearts[3]++
                    }
                    if (result[i].amaAme === 1) {
                        hearts[4]++
                    }
                }
    
                this.setState({
                    data: data[0],
                    staticData: {
                        ratings: ratings.map(x => {return (x/length).toFixed(1);}),
                        hearts: hearts,
                    },
                })
                console.log(this.state);
            }
        })
    }

    render() {
        return (
            <div>
                <Reviews allState={this.state}/>
            </div>
        );
    }
}

export default App;