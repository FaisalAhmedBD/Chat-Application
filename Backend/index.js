const express = require('express')
const app = express()
const http = require('http').Server(app)
const PORT = 3003
app.get('/', (req, res) => {
    res.send(`Hello from port ${PORT}`)
})
app.listen(PORT, () => console.log(`app is lisenting to port ${PORT}`))