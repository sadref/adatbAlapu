import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import { syncHistoryWithStore } from 'react-router-redux';

import allreducers from './reducers/index';

import Main from './components/main';
import Start from './components/start';
import Register from './components/register';
import Login from './components/login';


const store = createStore(
    allreducers
);


const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <Route path='/' component={Main}>
        <IndexRoute component={Start} />
        <Route path='register' component={Register} />
        <Route path='login' component={Login} />
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