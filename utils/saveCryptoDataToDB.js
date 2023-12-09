const CryptoModel = require('../model/Crypto.schema');
const getCryptoData = require('./getCryptoData');


const saveCryptoDataToDB = async () => {
    try {
      const cryptoData = await getCryptoData();
      CryptoModel.insertMany(cryptoData);
      console.log('Data successfully inserted!')
      // return cryptoData;
    } catch (err) {
        console.log('Error while inserting data')
      console.log(err);
    }
  };

module.exports = saveCryptoDataToDB;


