import mongoose from "mongoose";
const config = useRuntimeConfig();
export default async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log(" Connected");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
};