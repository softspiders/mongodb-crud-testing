const assert = require('assert');
const Pokemon = require('../src/pokemon');
let poke;

beforeEach((done) => {
    poke = new Pokemon({  name: 'poke' });
    poke.save()
        .then(() => done());
});

describe('Reading pokemon details', () => {
    it('finds pokemon with the name of poke', (done) => {
        Pokemon.findOne({ name: 'poke' })
            .then((pokemon) => {
                assert(poke.name === 'poke'); 
                done();
            });
    })
})