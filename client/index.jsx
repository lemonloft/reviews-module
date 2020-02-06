import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReviewsModule from './app.jsx';

const store = createStore(

);

ReactDOM.render(
    <Provider store = {store}>
        <ReviewsModule />
    </Provider>,
    document.getElementById('ReviewsModule')
);
