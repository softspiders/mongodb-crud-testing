// update_test.js
const assert = require('assert');
const Pokemon = require('../src/pokemon');
describe('Deleting a pokemon', () => {

  let poke;

  beforeEach((done) => {
    poke = new Pokemon({ name: 'poke' });
    poke.save()
      .then(() => done());
  });
  
  function assertHelper(statement, done) {
    statement
     .then(() => Pokemon.find({}))
     .then((pokemons) => {
      assert(pokemons.length === 1);
      assert(pokemons[0].name === 'Pickachu');
      done();
    });
  }
  
  it('sets and saves pokemon using an instance', (done) => {
    poke.set('name', 'Pickachu'); //not updated in mongodb yet
    assertHelper(poke.save(), done);
   });
 
  it('update pokemon using instance', (done) => {
    //useful to update multiple fields of the object
    assertHelper(poke.update({ name: 'Pickachu' }), done);
  });

  it('update all matching pokemons using model', (done) => {
    assertHelper(Pokemon.update({ name: 'poke' }, { name: 'Pickachu' }), done);
  });

  it('update one pokemon using model', (done) => {
    assertHelper(Pokemon.findOneAndUpdate({ name: 'poke' }, { name: 'Pickachu' }), done);
  });

  it('update one pokemon with id using model', (done) => {
    assertHelper(Pokemon.findByIdAndUpdate(poke._id, { name: 'Pickachu' }), done);
  });
});