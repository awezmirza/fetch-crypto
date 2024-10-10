import { MONGOOSE_URL } from "../config/config.js";
import mongoose from "mongoose";

const connectWithDB = async () => {
    await mongoose.connect(MONGOOSE_URL);
};

export default connectWithDB;