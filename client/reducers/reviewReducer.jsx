import { FETCH_REVIEWS } from '../actions/types.jsx';

const initialState = {
    items: [],
    item: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}