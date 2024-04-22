//index.js

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 2999

const championRouter = require('./api/champion')
const fileRouter = require('./api/file')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect('mongodb+srv://mattiashelgessonlenander:rkC5iaMbrkjGTrMR@cluster0.cgluahy.mongodb.net/?retryWrites=true&w=majority').then(() =>{
  console.log('connected to MongoDB');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.set('view engine', 'jade')


app.use('/api/champion', championRouter);
app.use('/api/file', fileRouter);