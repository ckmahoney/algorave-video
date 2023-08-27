const express = require('express')
var cors = require('cors')
let app = express()
app.use(cors())
app.use(express.static("./"))

app.listen(3000)