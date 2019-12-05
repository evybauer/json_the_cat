const fs = require('fs');
const request = require('request');

process.stdin.setEncoding('utf8');

const URL = function(breed) {
  const address = 'https://api.thecatapi.com/v1/breeds/search?q=';
  let answer = '';
  answer = address + breed;
  return answer; // URL + Breed
};

const breedName = process.argv.slice(2);    // Get user input

request(URL(breedName) , (error, response, body) => {

  fs.writeFile('description.txt', error, function(err) {
    if (!err) {
      console.log('');
    } else {
      console.log(err);
    }
  });

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Oops! Breed not found! Try it again!"); // Breed not found
    return;
  }

  console.log(data[0].description);    // Description
  console.log(typeof data);

  fs.writeFile('description.txt', body, function(err) {
    if (!err) {
      console.log('');
    } else {
      console.log('something went wrong!');
    }
  });

});






