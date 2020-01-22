const request = require('request');

const query = `{
  viewer { login }
}`;

const options = {
   method: 'POST',
   url: 'https://api.github.com/graphql',
   headers: {
   	  'User-Agent': 'request',
      'Authorization': 'Bearer 6fb831b995b038f5fd068c2c3a3ab8095c556fb9',
   },
   body: JSON.stringify({query})
};

request(options, function (error, response, body) {
   if (error) throw new Error(error);
   console.log(
      'Response: ' + response.statusCode + ' ' + response.statusMessage
   );
   console.log(body);
});