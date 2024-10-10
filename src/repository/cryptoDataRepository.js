import CryptoData from "../models/cryptoDataSchema.js";

class CryptoDataRepository {
    async create(data) {
        const cryptoData = await CryptoData.create(data);
        return cryptoData;
    }

    async insertMultipleData(dataArray) {
        try {
            await CryptoData.insertMany(dataArray);
        } catch (error) {
            console.log("Error occured while insert the array in DB");
        }
    }

}

export default CryptoDataRepository;