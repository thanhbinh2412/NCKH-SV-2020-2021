const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001
const commonData = require('./Common/commonData')

app.use(express.json())
app.use(cors())



// register router
const loginRouter = require('./router/login')
const moiThau = require('./router/moithau')
const fileUp = require('./router/fileUpload')
// use router
app.use(loginRouter)
app.use(moiThau)
app.use(fileUp)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})