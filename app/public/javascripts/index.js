var request = require('request');

request
     .get('http://localhost:3000/api/v1/sets')
     .on('response', response => {
         console.log(response.toJSON());
     })
