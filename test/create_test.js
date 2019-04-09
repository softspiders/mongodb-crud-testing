
const assert = require('assert');
const Pokemon = require('../src/pokemon'); //imports the Pokemon model.

describe('Creating documents', () => {
    it('creates a pokemon', (done) => {
        //assertion is not included in mocha so 
        //require assert which was installed along with mocha
        const poke = new Pokemon({ name: 'Pickachu' });
        poke.save() //takes some time and returns a promise
            .then(() => {
                assert(!poke.isNew); //if poke is saved to db it is not new
                done();
            });
    });
});