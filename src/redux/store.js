import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
//import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './root-reducer';



//const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

//const store = createStore(rootReducer,   composeEnhancers((applyMiddleware(...middlewares))));
//

const store = createStore(rootReducer,   applyMiddleware(...middlewares));

//sagaMiddleware.run(rootSaga);

export default store;
