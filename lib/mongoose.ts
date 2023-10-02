import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MISSING MONGODB_URL");

  if (isConnected) {
    return console.log("MONGO DB IS ALREADY CONNECTED");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "terraflow",
    });

    isConnected = true;
    console.log("MONGO DB IS CONNECTED");
  } catch (error) {
    console.log("MONGO DB CONNECTION ERROR");
  }
};