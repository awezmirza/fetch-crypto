import express from "express";
import { asyncErrorHandler, errorMiddleware } from "../errors/index.js";
import { noRouteController, statsController } from "../controllers/index.js";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.send({ pong: "Hello World!" });
});

router.get("/stats", asyncErrorHandler(statsController));

router.all("*", noRouteController);

router.use(errorMiddleware);

export default router;
