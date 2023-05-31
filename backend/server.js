require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;

mongoose.connect("mongodb://0.0.0.0:27017/jobsapi")
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((e) => {
        console.log(e.message);
    })

const workoutRoutes = require('./routes/workouts');

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use('/api/workouts', workoutRoutes);



app.listen(port, () => {
    console.log(`Connected to port 3000`)
})