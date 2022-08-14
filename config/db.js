const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
 // "mongodb+srv://blockit:82go3l80k0CVP0QZ@cluster0.uxqbofq.mongodb.net/?retryWrites=true&w=majority",
const connectDB = async () => {
const db = ``;


  try {
    await mongoose.connect(
      "mongodb://adminB:ZwIEXr2Ae3PumUBz@cluster0-shard-00-00.cj2aq.mongodb.net:27017,cluster0-shard-00-01.cj2aq.mongodb.net:27017,cluster0-shard-00-02.cj2aq.mongodb.net:27017/blockitt?ssl=true&replicaSet=atlas-mbd5qc-shard-0&authSource=admin&retryWrites=true&w=majority",
      // "mongodb+srv://adminB:nl2Igdep4De0sSUA@cluster0.cj2aq.mongodb.net/?retryWrites=true&w=majority",
       
      {
        useNewUrlParser: true,
        // dbName: 'blockitt'
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;