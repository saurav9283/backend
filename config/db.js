const mongoose = require("mongoose");
const CryptoModel = require("../model/Crypto.schema");

const saveCryptoDataToDB = require("../utils/saveCryptoDataToDB");

const url = "mongodb+srv://saurav:saurav@cluster0.lydlfoa.mongodb.net/app?retryWrites=true&w=majority";

const  connectDB= async () => {
    try {
        await mongoose.connect(url);
        console.log("Database Connected!");
        await CryptoModel.deleteMany({}) // Drop the collection before adding new data

        console.log("Collection Dropped! For adding New Data")
        saveCryptoDataToDB();
    } catch (err) {
        console.log("Error while connecting to database and dropping collection");
    }
};

module.exports = connectDB;