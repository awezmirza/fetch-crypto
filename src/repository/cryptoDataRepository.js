import CryptoData from "../models/cryptoDataSchema.js";

class CryptoDataRepository {
    async insertMultipleData(dataArray) {
        try {
            await CryptoData.insertMany(dataArray);
        } catch (error) {
            console.log("Error occured while insert the array in DB");
        }
    }

    async getStats(coin) {
        return await CryptoData.findOne({ name: new RegExp(coin, "i") }).sort({
            timestamp: -1
        });
    }

    async getDeviationData(coin) {
        return await CryptoData.find({ name: new RegExp(coin, "i") })
            .sort({ timestamp: -1 })
            .limit(100)
            .select("price");
    }
}

export default CryptoDataRepository;
