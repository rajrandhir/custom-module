import { combineReducers } from 'redux';
import userReducer from './users.reducers';
import RegisterReducer from "./registration.reducers";
import loginReducer from './login.reducers';

const rootReducer = combineReducers({
    userReducer,
    RegisterReducer,
    loginReducer
});
export default rootReducer;