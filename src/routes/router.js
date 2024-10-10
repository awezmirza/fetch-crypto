import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.send({ pong: "Hello World!" });
});

router.all("*", noRouteController);

router.use(errorMiddleware);

export default router;