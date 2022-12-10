//Create Connection
const {MongoClient} = require('mongodb')
let URL="mongodb://127.0.0.1:27017";
const client=new MongoClient(URL);

module.exports={client}