import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect");
  } catch (error) {
    console.error("err", error);
  }
};

export default connectMongoDB;
