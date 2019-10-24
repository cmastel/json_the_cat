const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let desc = [];
    const data = JSON.parse(body);
    if (data.length === 0) {
      desc = null;
    } else {
      desc = data[0].description;
    }

    callback(error, desc);
  });
  
};

module.exports = { fetchBreedDescription };
