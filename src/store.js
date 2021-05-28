
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './CalculateSaga';

import rootReducer from './Reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware
    ),
);

sagaMiddleware.run(rootSaga);
export { store }