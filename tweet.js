const express = require('express');
const router = express.Router();


const Tweet = require('../../models/Tweet');

// Create the route
router.post('/', (req, res) => {
    const { tweet } = req.body;
    const newTweet = new Tweet({
        tweet
    });

    newTweet.save()
        .then(tweet => res.json(tweet))
        .catch(err => res.json(err));
    
})

router.get('/', (req, res) => {
    Tweet.find(Tweet.tweet)
        .select('-_id')
        .select('-__v')
        .then(tweet => res.json(tweet));
})


module.exports = router;