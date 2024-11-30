// mango db config 
// signup mangodb atlas & enterprise free version
// create m0 cluster
// create a user
// get connection string using compass
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://geethanjaligovindaraju:D3tksEdhP0VRhiFC@node-dev.us6o3.mongodb.net/"
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('namaste_node');
    const users = database.collection('users');
    const single_user =  await users.insertOne({"age": 2, "name": "rakshu"});
    const multiple_users = await users.insertMany([{"age": 3, "name":"harshu"},{"age":4, "name": "siddhu"}]);
    const curr_user = await users.findOne({"_id": single_user.insertedId})
    console.log(curr_user);
    console.log(users.count());
    // console.log(users.find({}))
    // Query for a movie that has the title 'Back to the Future'

    console.log("connected successfully")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);