import combineReducers from 'redux/lib/combineReducers';
import {routerReducer} from 'react-router-redux';

const allreducers = combineReducers({
    routing: routerReducer
});

export default allreducers;