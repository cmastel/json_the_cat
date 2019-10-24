const request = require('request');
const args = process.argv.slice(2);
const searchTerm = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, (error, response, body) => {
  if (error) {
    console.log('An error occured. Please try again.');
    process.exit();
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Sorry, no breed found that matches that search term.');
    process.exit();
  }
  console.log(data[0].description);

});

