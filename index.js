
const { fetchBreedDescription } = require('./breedFetcher');

const arg = process.argv;
const breed = arg[2];

fetchBreedDescription(breed, (error, response, body) => {
  if (error) return console.log('error ', error);

  body = JSON.parse(body);
  body = body[0].description
  console.log('statusCode:', response && response.statusCode); 
  if (body.length > 0) {
    console.log(body);
  } else {
    console.log('Cats not found 🥺');
  }
});

