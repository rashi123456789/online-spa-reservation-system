import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer';
import reservationReducer from '../reducers/reservationReducer';
const configureStore=()=>{
    const store=createStore(combineReducers(
        {
            user:userReducer,
            reservation:reservationReducer
        }
    ),applyMiddleware(thunk))
    return store
}

export default configureStore