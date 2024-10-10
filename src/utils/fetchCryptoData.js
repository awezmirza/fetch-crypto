import axios from "axios";
import { COINGECKO_API_KEY } from "../config/config.js";
import CryptoDataRepository from "../repository/cryptoDataRepository.js";

const fetchCryptoData = async () => {
    try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&x_cg_demo_api_key=${COINGECKO_API_KEY}`;
        const response = await axios.get(url);

        const cryptoInfo = response.data;
        const cryptoArray = [
            {
                name: "Bitcoin",
                symbol: "BTC",
                price: cryptoInfo.bitcoin.usd,
                marketCap: cryptoInfo.bitcoin.usd_market_cap,
                change24h: cryptoInfo.bitcoin.usd_24h_change
            },
            {
                name: "Ethereum",
                symbol: "ETH",
                price: cryptoInfo.ethereum.usd,
                marketCap: cryptoInfo.ethereum.usd_market_cap,
                change24h: cryptoInfo.ethereum.usd_24h_change
            },
            {
                name: "Matic",
                symbol: "MATIC",
                price: cryptoInfo["matic-network"].usd,
                marketCap: cryptoInfo["matic-network"].usd_market_cap,
                change24h: cryptoInfo["matic-network"].usd_24h_change
            }
        ];

        const cryptoDataRepository = new CryptoDataRepository();
        await cryptoDataRepository.insertMultipleData(cryptoArray);
    } catch (error) {
        console.error("Error fetching crypto data:", error);
    }
};

export default fetchCryptoData;
