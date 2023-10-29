const mongoose = require('mongoose');

const connectDB = async ()=>{
  try{
  console.log(process.env);
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected: ${conn.connection.host}`);
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}
module.exports = connectDB;