import usersReducer from './users-reducer';
import { combineReducers } from 'redux';
import userClicked from './userNameClickedReducer';
import firstnameReducer from './reducerFirstname';
import lastnameReducer from './reducerLastname';
import scoreReducer from './reducerScore';

const allReducers = combineReducers({
    users:usersReducer,
    firstname:firstnameReducer,
    lastname:lastnameReducer,
    score:scoreReducer,
    userClicked:userClicked
})

export default allReducers;