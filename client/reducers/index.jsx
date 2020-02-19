import {combineReducers } from 'redux';
import reviewReducer from './reviewReducer.jsx';

export default combineReducers({
    reviews: reviewReducer
});