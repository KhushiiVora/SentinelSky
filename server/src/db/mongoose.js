const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://shakalDemon:shak%40l@cluster0.rq4hphg.mongodb.net/demoapp?retryWrites=true&w=majority"
    );
    // console.log(`Mongo db connected: ${conn.connection.host}`);
    console.log(`Mongo db connected!!!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
// });
