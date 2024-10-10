import dotenv from "dotenv";
dotenv.config();

const MONGOOSE_URL = process.env.MONGOOSE_URL;
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;

export { PORT, MONGOOSE_URL, NODE_ENV, COINGECKO_API_KEY};
