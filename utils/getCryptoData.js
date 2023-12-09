const axios = require('axios');
const url=process.env.CRYPTO_API_URL;
const getCryptoData = async () => {
    const response = await axios.get(url);
    const data = response.data;
    let cryptoData = [];
    for (const [key, value] of Object.entries(data)) {
        const crypto = {
            name: key,
            last: value.last,
            buy: value.buy,
            sell: value.sell,
            volume: value.volume,
            base_unit: value.base_unit,
        };
        cryptoData.push(crypto);
        if (cryptoData.length === 10) break;
    }
    return cryptoData;
}

module.exports = getCryptoData;