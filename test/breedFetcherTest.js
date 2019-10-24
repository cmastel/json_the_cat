const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDesciption', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc);
      done();
    });
  });


  it('returns null for an invalid breed, via callback', (done) => {
    fetchBreedDescription('mango', (err, desc) => {
      //assert.equal(err, null);
      assert.equal(err, null);
      assert.equal(desc, null);
      done();
    });
  });

});

