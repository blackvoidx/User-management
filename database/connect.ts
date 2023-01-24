import mongoose, { ConnectOptions } from "mongoose";

type ConnectionOptionsExtend = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

const options: ConnectOptions & ConnectionOptionsExtend = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectMongo = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URI?.toString()!, options);
    console.log("CONNECTED DATABASE");
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
