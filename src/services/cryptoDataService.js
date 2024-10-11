import customError from "../errors/customError.js";
import CryptoDataRepository from "../repository/cryptoDataRepository.js";

class CryptoDataService {
    constructor() {
        this.cryptoDataRepository = new CryptoDataRepository();
    }

    async getStats(coin) {
        return await this.cryptoDataRepository.getStats(coin);
    }

    async getDeviation(coin) {
        const data = await this.cryptoDataRepository.getDeviationData(coin);
        if (!data || !data.length) {
            throw new customError(404, "No data found for the requested coin");
        }
        const priceValues = data.map((priceData) => priceData.price);

        // Standard Deviation
        const mean = priceValues.reduce((acc, val) => acc + val, 0);
        const variance = priceValues.reduce(
            (acc, val) => acc + Math.pow(val - mean, 2),
            0
        );
        const standardDeviation = Math.sqrt(variance);

        return parseFloat(standardDeviation.toFixed(2));
    }
}

export default CryptoDataService;
