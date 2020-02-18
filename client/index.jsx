import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReviewsModule from './app.jsx';

import store from './store.jsx';

ReactDOM.render(
    <Provider store={store}>
        <ReviewsModule />
    </Provider>,
    document.getElementById('ReviewsModule')
);
