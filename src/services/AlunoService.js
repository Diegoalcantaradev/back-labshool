//Importação do database
const database = require('../database')

module.exports = {
    //Método para cadastrar um novo aluno
    createAluno:(foto, nome, telefone, email, data_nascimento, curso)=>{
        return new Promise((resolve, reject)=>{
            database.query(`INSERT INTO aluno VALUES(null , ?, ?, ?, ?, ?, ?)`, [foto, nome, telefone,data_nascimento ,curso , email], (err, result)=>{
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },
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