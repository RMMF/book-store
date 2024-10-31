const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

main().then(() => console.log('MongoDB connected...')).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}