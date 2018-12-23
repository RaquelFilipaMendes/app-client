import {
    ASYNC_START,
    ASYNC_END,
} from './actions/phoneNumbers';


const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        store.dispatch({type: ASYNC_START, subtype: action.type});

        const currentView = store.getState().viewChangeCounter;
        const skipTracking = action.skipTracking;

        action.payload.then(
            res => {
                const currentState = store.getState();
                if (!skipTracking && currentState.viewChangeCounter !== currentView) {
                    return
                }

                action.payload = res;
                store.dispatch({type: ASYNC_END, promise: action.payload});
                store.dispatch(action);
            },
            error => {
                const currentState = store.getState();
                if (!skipTracking && currentState.viewChangeCounter !== currentView) {
                    return
                }

                action.error = true;
                action.payload = error.data;
                if (!action.skipTracking) {
                    store.dispatch({type: ASYNC_END, promise: action.payload});
                }
                store.dispatch(action);
            }
        );

        return;
    }

    next(action);
};

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));

        return result;
    };
};

function isPromise(v) {
    return v && typeof v.then === 'function';
}


export {promiseMiddleware, localStorageMiddleware}
