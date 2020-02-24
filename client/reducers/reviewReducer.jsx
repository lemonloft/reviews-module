import { FETCH_REVIEWS } from '../actions/types.jsx';

const initialState = {
    data: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_REVIEWS:
        console.log('reducer');
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}