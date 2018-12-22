import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import phoneNumbers from '../reducers/phoneNumbers';
import {routerReducer} from 'react-router-redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import createHistory from 'history/createBrowserHistory';
import {promiseMiddleware, localStorageMiddleware} from '../middleware';
import {routerMiddleware} from 'react-router-redux'

export const history = createHistory();

export const ConfigureStore =() => {

    const config = {
        key: 'root',
        storage,
        blacklist: ['phoneNumbers'],
        debug: true
    };

    const myRouterMiddleware = routerMiddleware(history);

    const store = createStore(
        persistCombineReducers(config, {
            phoneNumbers,
            router: routerReducer
        }),
        applyMiddleware(thunk, logger, myRouterMiddleware, promiseMiddleware, localStorageMiddleware)
    );

    const persistor = persistStore(store);
    return {persistor, store};
};
