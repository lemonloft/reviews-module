import { FETCH_REVIEWS } from '../actions/types.jsx';

const initialState = {
    data: [],
    staticData: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_REVIEWS:
            return {
                ...state,
                data: action.payload[0],
                staticData: action.payload[1]
            }
        default:
            return state;
    }
}