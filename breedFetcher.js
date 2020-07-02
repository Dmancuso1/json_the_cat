const request = require('request');

const baseUrl = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = (breed, cb) => {
  const fullUrl = baseUrl + `?q=${breed}`;
  request(fullUrl, cb);
}

module.exports = { fetchBreedDescription };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const baseUrl = 'https://api.thecatapi.com/v1/breeds/search';
  // const addToUrl = `?q=${arg[0]}`;
  // const fullUrl = baseUrl + addToUrl;
  
  
  // request(fullUrl, (error, response, body) => {
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   // console.log('body:', body); // Print the HTML for the Google homepage.
  //   // console.log(typeof body)
  
  //   if (error) {return console.log('error ', error);}
  
  //   const data = JSON.parse(body);
  //   // console.log(data)
  //   if (data.length > 0) {
  //     console.log(data[0].description);
  //   } else {
  //     console.log('Cats not found 🥺');
  //   }
  
  
  // });
  
  