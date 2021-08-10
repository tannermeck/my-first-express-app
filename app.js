console.log('hello world!')

const express = require('express')
const app = express()

const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dirtbikes', (req, res) => {
    res.json(data);
})

app.get('/dirtbikes/:id', (req, res) => {
    const bikeId = Number(req.params.id)
    const bike = data.find(item => item.id === bikeId)
    res.json(bike)
})
module.exports = app