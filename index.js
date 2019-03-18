import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import tweetReducer from './tweetReducer';


export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    tweet: tweetReducer 
});