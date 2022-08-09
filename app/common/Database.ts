import { CONNECTION_URI } from "../config/config.js";
import mongoose from "mongoose";

export const connectDatabase = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000
  };
  mongoose.connect(CONNECTION_URI ? CONNECTION_URI : "", options)
    .then(() => console.log("Database Connected Successfully"))
    .catch((error) => console.log(`${error} did not connect`));
};
