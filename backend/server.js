require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, (e) => {
            if (!e) {
                console.log(`Server listening on localhost:${port}`);
            } else {
                console.log(e.message);
            }
        })

    })
    .catch((e) => {
        console.log(e.message);
    })

