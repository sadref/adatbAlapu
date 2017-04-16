import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import { syncHistoryWithStore } from 'react-router-redux';

import allreducers from './reducers/index';

import Main from './components/main';
import Start from './components/start';

console.log(allreducers);

const store = createStore(
    allreducers
);

console.log(browserHistory)

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <Route path='/' component={Main}>
        <Route path='start' component={Start} />
    </Route>
);

const rootElement = document.getElementById('webshop');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    rootElement
);