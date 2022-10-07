import mongoose from "mongoose";
const config = useRuntimeConfig();
export default async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
};
