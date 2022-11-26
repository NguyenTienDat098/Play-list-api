const mongoose = require("mongoose");
const client = `mongodb://localhost:27017/play_list_db`;
const serverDB = `mongodb+srv://nguyentiendat098:coder2442004@cluster0.rv7ojc4.mongodb.net/?retryWrites=true&w=majority`;
async function connect() {
  try {
    await mongoose.connect(serverDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected databse successfully !");
  } catch (err) {
    console.log(`ERROR: ${err} !!!`);
  }
}
module.exports = { connect };
