import { TWEET_SUBMIT } from '../actions/types';


const initialState = {
    data: ''
}


export default function (state = initialState, action) {
    switch(action.type) {
        case TWEET_SUBMIT:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}