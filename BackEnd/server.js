const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connect('open', () => {
    console.log("MongoDB database connection established successfully");
});

const activityRouter = require('./routes/activities');
const petsRouter = require('./routes/pets');

app.use('/activities', activityRouter);
app.use('/pets', petsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});