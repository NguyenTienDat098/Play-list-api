const mongoose = require("mongoose");
const client = `mongodb://localhost:27017/play_list_db`;
async function connect() {
  try {
    await mongoose.connect(client, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected databse successfully !");
  } catch (err) {
    console.log(`ERROR: ${err} !!!`);
  }
}
module.exports = { connect };
