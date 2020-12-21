const express = require('express')
const app = express()
const PORT = 9898;

app.get('test', (req, res) => {
  res.send('welcome to twilio')
})

app.listen(PORT, () => {
  console.log(`listening on PORT ${}`)
})