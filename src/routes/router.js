import express from "express";
import { errorMiddleware } from "../errors/index.js";
import { noRouteController } from "../controllers/index.js";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.send({ pong: "Hello World!" });
});

router.all("*", noRouteController);

router.use(errorMiddleware);

export default router;