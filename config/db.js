const mongoose = require("mongoose");
const CryptoModel = require("../model/Crypto.schema");

const saveCryptoDataToDB = require("../utils/saveCryptoDataToDB");

const url = process.env.MONGO_URL;

const  connectDB= async () => {
    try {
        await mongoose.connect(url);
        console.log("Database Connected!");
        await CryptoModel.collection.drop() // Drop the collection before adding new data

        console.log("Collection Dropped! For adding New Data")
        saveCryptoDataToDB();
    } catch (err) {
        console.log("Error while connecting to database and dropping collection");
    }
};

module.exports = connectDB;