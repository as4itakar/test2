const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const userRouter = require('./Routes/user')

app.use(express.json())
app.use(cors())

app.use('/user', cors(), userRouter)


app.listen(port, () => {
    console.log('Сервер работает на порту ' + port)
})
