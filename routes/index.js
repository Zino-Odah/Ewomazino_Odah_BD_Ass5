var express = require('express');
var router = express.Router();
var fs = require('fs');
const { post } = require('jquery');

/* GET home page. */
router.get('/', function(req, res, next) {
  let navigationLinks = [
      'World','U.S.','Technology','Design','Culture','Business','Politics','Opinion','Science','Health','Style','Travel'
  ];

  let rawdata = fs.readFileSync('./database/posts.json');

  let posts = JSON.parse(rawdata);

  let justPosts = posts.filter(data => data.is_featured === false)

  // let featuredPosts = posts.filter('is_featured');
  let featuredPosts = posts.filter(data => data.is_featured === true)
  // console.log(featuredPosts);

  res.render('blog', {
    title: 'She Code Queens',
    links: navigationLinks,
    posts: justPosts,
    fposts: featuredPosts
  });

});

module.exports = router;
