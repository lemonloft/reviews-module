import { CHANGE_SEARCHBOOL } from '../actions/types.jsx';

const initialState = {
    searchBool: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_SEARCHBOOL:
            return {
                searchBool: !state,
            }
        default:
            return state;
    }
}