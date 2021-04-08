//load dependencies
const express = require('express')
const socket = require('socket.io')
require('dotenv').config()
const app = express()

//start a server on process.env.PORT
//as mentioned in the README.md, this server is a unidirectional server
//in order to make it bidirectional, we've made the change on key #1
const server = app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`)
})

//starts a static server using the files located in 'public' folder
app.use(express.static('public'))

//key #1
const upgradedServer = socket(server)
upgradedServer.on('connection', (socket) => {
    console.log('websocket connected', socket.id)
})
