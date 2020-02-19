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