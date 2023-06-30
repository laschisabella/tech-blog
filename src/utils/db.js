import mongoose from "mongoose";

let isConnected = false;

const connect = async () => {

  mongoose.set("strictQuery", true);
  
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    isConnected = false;
    throw new Error("Mongoose connection failed. Error: ", err)
  }
}

export default connect