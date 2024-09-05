const { response } = require('express')
const AlunoService = require('../services/AlunoService')
const { json } = require('body-parser')


module.exports = {
    //Método para salvar um novo aluno
    saveAluno: async (request, response) => {
        let json = {error : "",result:""}

        let foto = request.file.buffer
        let nome = request.body.nome
        let telefone = request.body.telefone
        let data_nascimento = request.body.data_nascimento
        let email = request.body.email
        let curso = request.body.curso

        let aluno = await AlunoService.createAluno(foto, nome, telefone, email, data_nascimento, curso)

        json.result = `Aluno: ${nome} cadastrado com sucesso! ID: { ${aluno.insertID}}`
        response.status(201).json(json)
        },
    //Método para consultar os alunos
    findAllAlunos: async (request, response) => {
        //Declaração do objeto json será retornado como resposta da requisição
        let json = { error: "", result: [] }
        //Invocar a função que irá consultar o BD para listar os alunos
        let alunos = await AlunoService.readAlunos()
        //Tratamento de dados
        for (let aluno of alunos) {
            json.result.push({
                id: aluno.id,
                nome: aluno.nome,
                telefone: aluno.telefone,
                email: aluno.email
            })
        }
        response.status(200).json(json)
    },
    // Método para deletar um aluno
    deleteAluno: async (request, response) => {
        let json = { error: "", result: {} }

        let id = request.params.id

        if (id) {
            let alunoValid = await AlunoService.findAlunoById(id)

            if (alunoValid.length == 0) {
                json.error = "Aluno não encontrado!"
                response.status(404).json(json)
            } else {
                await AlunoService.deleteAluno(id)

                json.result = `Aluno ${alunoValid[0].nome} excluído com sucesso.`

                response.status(200).json(json)
            }
        }
    },
    findAlunoById: async (request, response) => {
        let json = { error: "", result: {} }

        let id = request.params.id

        if (id) {
            let alunoValid = await AlunoService.GetAlunoById(id)

            if (alunoValid.length == 0) {
                json.error = "Aluno não encontrado!"
                response.status(404).json(json)
            } else {

                json.result = `Aluno ${alunoValid[0].nome} Valido`

                response.status(200).json(json)
            }
        }
    }
}