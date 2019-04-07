const mongoose = require('mongoose');
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false); // Getting rid of 'DeprecationWarning: collection.findAndModify is deprecated'

const uri = 'mongodb://localhost/pokemons'; // Can be replaced for your own mongodb url if needed

mongoose.connect(uri, { useNewUrlParser: true }); 
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });
//Called hooks which runs before something.
beforeEach((done) => {
    mongoose.connection.collections.pokemons.drop(() => {
         //this function runs after the drop is completed
        done(); //go ahead everything is done now.
    }); 
});