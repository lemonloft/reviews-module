import { FETCH_REVIEWS } from './types.jsx';
import { ajax } from 'jquery';

// export function fetchReviews() {
//     return function(dispatch) {
        
//     }
// }

export const fetchReviews = () => dispatch => {
    let url = 'http://localhost:3004/api/reviews';
    // let url = 'http://52.52.189.97/api/reviews';
    if (window.location.pathname.length > 1) {
      url += window.location.pathname;
    }
    ajax({
      url,
      method: 'GET',
      success: reviews =>
        dispatch({
            type: FETCH_REVIEWS,
            payload: reviews
        })
    });
};

export const fetchReviews = () => dispatch => {
    let url = 'http://localhost:3004/api/reviews';
    // let url = 'http://52.52.189.97/api/reviews';
    if (window.location.pathname.length > 1) {
      url += window.location.pathname;
    }
    ajax({
      url,
      method: 'GET',
      success: (data) => {
        const result = data[0];
        const length = result.length;

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

        let reviews = [
            data[0],
            {
                ratings: ratings.map((x, i) => {
                  if (i === 0) {
                    return (x / length).toFixed(2);
                  }
                  return (x / length).toFixed(1);
                }),
                hearts,
            } 
        ];

        return dispatch({
            type: FETCH_REVIEWS,
            payload: reviews
        });
      },
    });
};