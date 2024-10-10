import { customError } from "../errors";

const statsController = async (req, res) => {
    const coin = req.query.coin;

    if (!coin || !['bitcoin', 'ethereum', 'matic-network'].includes(coin)) {
        throw new customError(400, "Invalid Coin");
    }
}

export default statsController;