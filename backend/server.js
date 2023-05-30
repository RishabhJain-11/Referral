require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const workoutRoutes = require('./routes/workouts');

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes);


app.listen(port, (e) => {
    if (!e) {
        console.log(`Server listening on localhost:${port}`);
    } else {
        console.log(e.message);
    }
})
