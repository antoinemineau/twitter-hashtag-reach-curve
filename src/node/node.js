// requires
var http = require('http');
var url = require('url');

// create server
http.createServer(function (req, res) {
  // get query
  var queryData = url.parse(req.url, true).query;

  // error handler
  var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
    console.log('RESPONSE [%s]', response);
    console.log('BODY [%s]', body);
  };

  // success handler
  var success = function (data) {
    res.end(data);
  };

  // response header
  res.writeHead(200, {'Content-Type': 'application/json'});

  // twitter call
  var config = {
    'consumerKey': 'sgzM2Eai1MWggPfEbI8VxY5kL',
    'consumerSecret': 'Ckduk3UbSgGiLHwhFvfJ6jiLNLrEsXlnbgF0Bl9p6c70IRuyri',
    'accessToken': '1422648114-XkHnQa3CQBB0Ab0c3NMQnTymiUFUrvj7FQXNzp1',
    'accessTokenSecret': 'VxxNivc2X823cwindxtYRm8qzQPyWJ3Ac5QMwUnpETI4G',
  };
  var Twitter = require('twitter-node-client').Twitter;
  var twitter = new Twitter(config);
  twitter.getSearch({
    'q': '#' + queryData.hashtag,
    'count': 10
  }, error, success);
}).listen(8124, '0.0.0.0');
console.log('Server running at http://0.0.0.0:8124/');