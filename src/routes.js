const express = require('express')
const route = express.Router()
const cors = require('cors')
const CursoController = require('./controllers/CursoController')

route.options("*", cors())
// Endpoint - CURSO
route.get('/curso', CursoController.findAllTurmas) //READY

module.exports = route
