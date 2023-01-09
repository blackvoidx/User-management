import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect("mongodb://localhost:27017");
    if (connection.readyState == 1) {
      console.log("CONNECTED DATABASE");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
