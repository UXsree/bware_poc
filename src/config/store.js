import {createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from '../reducers/login-reducer';
import deleteReducer from '../reducers/delete-reducer';

const rootReducer = combineReducers({
    //list: listReducer,
    login: loginReducer,
    delete: deleteReducer
})


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;