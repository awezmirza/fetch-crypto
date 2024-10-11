import { customError } from "../errors/index.js";
import CryptoDataService from "../services/cryptoDataService.js";

const deviationController = async (req, res) => {
    let coin = req.query.coin;
    if (!coin) {
        throw new customError(400, "Coin is required");
    }

    if (!["bitcoin", "ethereum", "matic"].includes(coin.toLowerCase())) {
        throw new customError(400, "Invalid Coin");
    }

    const cryptoDataService = new CryptoDataService();
    const standardDeviation = await cryptoDataService.getDeviation(coin);

    res.json({
        deviation: standardDeviation
    });
};

export default deviationController;
