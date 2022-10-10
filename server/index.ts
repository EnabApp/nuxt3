import mongoose from "mongoose";
export default async () => {
  try {
    console.log("Mongoose connecting...");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose connected.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
};