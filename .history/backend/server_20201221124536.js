const express = require('express')
const app = express()

app.get('test', (req, res) => {
  res.send('welcome to twilio')
})

app.listen(PORT, )