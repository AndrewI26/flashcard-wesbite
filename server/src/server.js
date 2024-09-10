require('dotenv').config();

const user = process.env.user;
const p = process.env.p;
const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')

const PORT = process.env.PORT || 8000
const MONGO_URL = `mongodb+srv://${user}:${p}@cluster0.wd1uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const server = http.createServer(app)

mongoose.connection.once('open', () => {
    console.log('MongoDB connection successful!')
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})

async function startServer() {
    await mongoose.connect(MONGO_URL)
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
}

startServer()