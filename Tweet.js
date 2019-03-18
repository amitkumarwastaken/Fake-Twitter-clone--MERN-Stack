const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TweetSchema = new Schema ({
    tweet: {
        type: String
    },
    tweet_date: {
        type: Date,
        default: Date.now
    }
    
});


module.exports = Tweet = mongoose.model('tweet', TweetSchema);