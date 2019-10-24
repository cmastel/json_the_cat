const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      const msg = `Error when fetching flyover times. Respone ${error}`;
      callback(Error(msg), null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching flyover times. Respone ${body}`;
      callback(Error(msg), null);
      return;
    }
  
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
