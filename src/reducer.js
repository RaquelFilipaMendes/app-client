import {combineReducers} from 'redux';
import phoneNumbers from 'reducers/phoneNumbers';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    phoneNumbers,
    router: routerReducer
});
