const express = require('express')
const path    = require('path')
const app     = express()
const port    = process.env.PORT || 8080

app.use('/', express.static(path.join(__dirname + '/dist')))
app.use('/assets/', express.static(path.join(__dirname + '/assets')))
app.get('/', (req, res) => {res.sendFile(path.join(__dirname + '/dist/index.html')) })
app.listen(port, () => console.log(`360° Media Banner up on port ${port}!`))
