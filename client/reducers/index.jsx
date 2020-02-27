import {combineReducers } from 'redux';
import reviewReducer from './reviewReducer.jsx';
import searchBoolReducer from './searchBoolReducer.jsx';

export default combineReducers({
    reviews: reviewReducer,
    searchBool: searchBoolReducer,
});