const express = require('express')

const PORT = 4000

const app = express()

app.get('/express-status', (req, res) => res.send('OK'))

console.log(`Listening on ${PORT}`)
app.listen(PORT)