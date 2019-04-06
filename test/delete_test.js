// delete_test.js
const assert = require('assert');
const Pokemon = require('../src/pokemon');
describe('Deleting a pokemon', () => {

  let poke;

  beforeEach((done) => {
    poke = new Pokemon({ name: 'poke' });
    poke.save()
      .then(() => done());
  });

  it('removes a pokemon using its instance', (done) => {
    poke.remove()
      .then(() => Pokemon.findOne({ name: 'poke' }))
      .then((pokemon) => {
        assert(pokemon === null);
        done();
      });
  });

  it('removes multiple pokemons', (done) => {
    Pokemon.remove({ name: 'poke' })
      .then(() => Pokemon.findOne({ name: 'poke' }))
      .then((pokemon) => {
        assert(pokemon === null);
        done();
      });
  });

  it('removes a pokemon', (done) => {
    Pokemon.findOneAndRemove({ name: 'poke' })
      .then(() => Pokemon.findOne({ name: 'poke' }))
      .then((pokemon) => {
        assert(pokemon === null);
        done();
      });
  });

  it('removes a pokemon using id', (done) => {
    Pokemon.findByIdAndRemove(poke._id)
    // the following code block is repeated again and again
      .then(() => Pokemon.findOne({ name: 'poke' }))
      .then((pokemon) => {
        assert(pokemon === null);
        done();
      });
    // block end
  })
})