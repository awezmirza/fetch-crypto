import express from "express";
import router from "./routes/index.js";
import connectWithDB from "./connectWithDB.js";

const initializeServer = async () => {
    const app = express();

    // TODO Add Limit on this
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    await connectWithDB().catch(() => {
        console.error("Error connecting MongoDB");
    });

    app.use("/", router);
};

export default initializeServer;