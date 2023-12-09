const CryptoModel = require('../model/Crypto.schema');

exports.getAllCryptoData = async (req, res) => {
  try {
    const cryptoData = await CryptoModel.find();
    res.status(200).json(cryptoData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}