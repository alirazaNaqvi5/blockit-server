const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
        "mongodb://adminB:jHgSsVNInACwzebL@cluster0-shard-00-00.cj2aq.mongodb.net:27017,cluster0-shard-00-01.cj2aq.mongodb.net:27017,cluster0-shard-00-02.cj2aq.mongodb.net:27017/blockitt?ssl=true&replicaSet=atlas-mbd5qc-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;