const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
//);
const connection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Error is :: ",error);
    });

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});