import CryptoDataRepository from "../repository/cryptoDataRepository.js";

class CryptoDataService {
    constructor() {
        this.cryptoDataRepository = new CryptoDataRepository();
    }

    async getStats(coin) {
        return await this.cryptoDataRepository.getStats(coin);
    }
}

export default CryptoDataService;
