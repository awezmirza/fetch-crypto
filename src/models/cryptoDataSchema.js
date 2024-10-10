import mongoose from "mongoose";

const cryptoDataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        symbol: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        marketCap: {
            type: Number,
            required: true
        },
        change24h: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const CryptoData = mongoose.model("Crypto", cryptoDataSchema);

export default CryptoData;
