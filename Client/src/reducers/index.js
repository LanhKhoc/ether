import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux'

import session from "./session";

export default combineReducers({
    session,
    routing: routerReducer
})