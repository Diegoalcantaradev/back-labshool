const express = require('express')
const route = express.Router()
const cors = require('cors')
const CursoController = require('./controllers/CursoController')
const AlunoController = require('./controllers/AlunoController')
const upload = require('./config/multerConfig')

route.options("*", cors())

// Endpoint - CURSO
route.get('/curso', CursoController.findAllTurmas) //READY
route.post('/curso', CursoController.saveCurso) //CREATE
route.put('/curso/:id', CursoController.updateCurso) //UPDATE
route.delete('/curso/:id', CursoController.deleteCurso) //DELETE

// Endpoint - Alunos
route.get('/aluno', AlunoController.findAllAlunos) //READY
route.get('/aluno/:id', AlunoController.findAlunoById) //READY
route.post('/aluno', upload.single('image'), AlunoController.saveAluno) //CREATE
route.put('/aluno/:id',upload.single('image'), AlunoController.updateAluno) //UPDATE
route.delete('/aluno/:id', AlunoController.deleteAluno) //DELETE

module.exports = route
