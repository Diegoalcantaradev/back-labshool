const express = require('express')
const route = express.Router()
const cors = require('cors')
const CursoController = require('./controllers/CursoController')

route.options("*", cors())

// Endpoint - CURSO
route.get('/curso', CursoController.findAllTurmas) //READY
route.post('/curso', CursoController.saveCurso) //CREATE
route.put('/curso/:id', CursoController.updateCurso) //UPDATE
route.delete('/curso/:id', CursoController.deleteCurso) //DELETE

module.exports = route
