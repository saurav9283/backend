const CryptoModel = require('../model/Crypto.schema');
const saveCryptoDataToDB = require('../utils/saveCryptoDataToDB');

exports.getAllCryptoData = async (req, res) => {
  try {
    console.log("Collection Dropped! For adding New Data")
    await saveCryptoDataToDB();
    const cryptoData = await CryptoModel.find();
    res.status(200).json(cryptoData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}