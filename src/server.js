require('dotenv').config({path:'variaveis.env'})

// importação dos módulos
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes.js')

const server = express()

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(cors())
server.use("/api",routes)

server.listen(process.env.PORTSERVER,() =>{
    console.log(`server listening on http://localhost:${process.env.PORTSERVER} `)
})

