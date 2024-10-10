import { customError } from "../errors/index.js";
import CryptoDataService from "../services/cryptoDataService.js";

const statsController = async (req, res) => {
    let coin = req.query.coin;
    if (!coin) {
        throw new customError(400, "Coin is required");
    }

    if (!["bitcoin", "ethereum", "matic"].includes(coin.toLowerCase())) {
        throw new customError(400, "Invalid Coin");
    }

    const cryptoDataService = new CryptoDataService();
    const response = await cryptoDataService.getStats(coin);
    if (!response) {
        throw new customError(404, "No data found for the requested coin");
    }

    res.json({
        price: response.price,
        marketCap: response.marketCap,
        "24hChange": response.change24h
    });
};

export default statsController;
