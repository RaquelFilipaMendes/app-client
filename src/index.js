import React from 'react';
import ReactDOM from 'react-dom';
import ListPhoneNumbers from './views/ListPhoneNumbers';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {ConfigureStore} from './store/configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import {history} from './store/configureStore';

const {persistor, store} = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <ListPhoneNumbers />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

