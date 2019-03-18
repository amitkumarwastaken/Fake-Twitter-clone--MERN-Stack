import axios from 'axios';
import { TWEET_SUBMIT } from './types';


export const tweetRegister = ({ tweet }) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request Body
    const body = JSON.stringify({ tweet });

    axios.post('/api/tweet', body, config)
        .then(res => dispatch({
            type: TWEET_SUBMIT,
            payload: res.data
        }));
        
};