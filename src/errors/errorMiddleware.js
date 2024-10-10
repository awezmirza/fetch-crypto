import { NODE_ENV } from "../config/config.js";
import {devError, prodError} from "./index.js";

const errorMiddleware = (err, req, res) => {
    err.statusCode = err.statusCode || 500;
    if (NODE_ENV == "development") {
        devError(res, err);
    } else if (NODE_ENV == "production") {
        prodError(res, err);
    }
};

export default errorMiddleware;
