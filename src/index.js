import express from "express";
import { PORT } from "./config/config.js";
import connectWithDB from "./utils/connectWithDB.js";
import router from "./routes/router.js";

const app = express();

const initializeServer = () => {
    // TODO Add Limit on this
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    connectWithDB().catch(() => {
        console.error("Error connecting MongoDB");
    });

    app.use("/", router);
};

const server = app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
    initializeServer();
});