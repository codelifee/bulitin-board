import { combineReducers, createStore, applyMiddleware } from  'redux';
import { createLogger } from 'redux-logger';
import counterReducer from './reducers/counter'

const loggerMiddleware = createLogger({});

let middleware = [];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, loggerMiddleware];
}

const reducer = combineReducers({
    counter: counterReducer
})

const store = createStore(
    reducer,
    {},
    applyMiddleware(...middleware)
)

export default store