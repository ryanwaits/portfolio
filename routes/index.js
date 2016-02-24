var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var moment = require('moment');
var GitHubApi = require("github");
var request = require('request');

// set twitter keys and access tokens using twitter api wrapper
var client = new Twitter({
  consumer_key: process.env.TWITTER_PORTFOLIO_API_KEY,
  consumer_secret: process.env.TWITTER_PORTFOLIO_API_SECRET,
  access_token_key: process.env.TWITTER_PORTFOLIO_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_PORTFOLIO_ACCESS_TOKEN_SECRET
});
 
// set github headers using github api wrapper
var github = new GitHubApi({
    version: "3.0.0",
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent 
    }
});

// GET home page
router.get('/', function(req, res, next) {
    // parameters for twitter search
    var params = {screen_name: 'ryan_waits', count: 5};

    // request my last 5 tweets
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (error) console.log(error);
      // request repos from github
      github.repos.getFromUser({user: "ryanwaits", sort: 'updated', affiliation: ['owner', 'collaborator', 'organization_member']}, function(err, githubData) {
          if (err) {
            // if an error occurs, redirect to homepage
            res.render('index');
          };
          // render tweets and github data to the index page
          complete(tweets, githubData);
          console.log(tweets);
      });
    });

    // run this function once we have received tweets AND github repo data, and render it to the index page
    function complete(tweets, repos) {
      if (tweets) {
        res.render('index', { 
          tweets: tweets,
          moment: moment,
          repos: repos
         });
       };
    };
});

module.exports = router;
