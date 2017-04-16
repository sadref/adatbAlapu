import * as types from '../actions/user-types';

export default function (
    state = {
        userid: 0
    }, action = null) {
    switch (action.type) {
        case types.SET_USER_ID:
            return Object.assign({}, state, { userid: action.data })
        default:
            return state;
    }
};