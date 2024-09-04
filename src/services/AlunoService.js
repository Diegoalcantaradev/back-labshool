//Importação do database
const { query, request } = require('express')
const { seach } = require('../routes')
const database = require('../database')
const { updateAluno } = require('../controllers/AlunoController')

module.exports = {
    //Métado para consultar os alunos
    readAlunos: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM aluno', (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },
    //Métado para deletar aluno
    deleteAluno: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM aluno WHERE id =${id}`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },
    //Métado para pesquisar um aluno pelo id
    GetAlunoById: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT id, foto, nome, telefone, data_nascimento, email FROM aluno WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
}