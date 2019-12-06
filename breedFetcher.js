const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {

    if (error) {
      callback(`Something went wrong!: ${error}`,null);
    }

    const data = JSON.parse(body);

    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`Oops! ${breedName} not found! Try it again!`,null);
    }
  });

};


module.exports = { fetchBreedDescription };
