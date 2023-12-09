const express = require('express');
const cors = require('cors');
const cryptoRoutes = require('./routes/crypto.routes');
require('dotenv').config();
const connectDB = require('./config/db');


const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('API is Working !');
});

app.use('/api/crypto', cryptoRoutes);

// Connect to database
connectDB();


app.listen(5000, () => {
  console.log('App listening on port 5000! 🚀');
});