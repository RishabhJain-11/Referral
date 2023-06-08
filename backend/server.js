require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const jobRoutes = require('./routes/jobs');

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use('/api/jobs', jobRoutes);

mongoose.connect("mongodb://0.0.0.0:27017/jobsapi")
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to port ${port}`)
        })
    })
    .catch((e) => {
        console.log(e.message);
    })