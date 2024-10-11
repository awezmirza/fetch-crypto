import express from "express";
import { PORT } from "./config/config.js";
import connectWithDB from "./utils/connectWithDB.js";
import router from "./routes/router.js";
import cron from "node-cron";
import cors from "cors";
import fetchCryptoData from "./utils/fetchCryptoData.js";

const app = express();

const initializeServer = () => {
    // TODO Add Rate Limiter

    // TODO Configure this later
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    connectWithDB().catch(() => {
        console.error("Error connecting MongoDB");
    });

    app.use("/", router);
};

cron.schedule("0 */2 * * *", () => {
    fetchCryptoData();
});

const server = app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
    initializeServer();
});
