//Importação do database
const { updateAluno } = require('../controllers/AlunoController')
const database = require('../database')

module.exports = {
    //Método para consultar os alunos
    getAluno: () => {
        return new Promise((resolve, reject) => {
            database.query(`Select id, nome, telefone, email, FROM aluno`,(err, result)=>{
            if(err){
            reject(err)
            return
            }
            resolve(result)
            })
        })
    },
    //Método para atualizar um aluno
    updateAluno: (id, foto, nome, telefone, email, data_nascimento) => {
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE aluno SET foto = ?, nome = ?, telefone = ?, data_nascimento = ?, email = ? WHERE id =?`, [foto, nome, telefone, data_nascimento, email, id],
                (err, result) => {
                    if(err){
                        reject(err)
                        return
                    }
                    resolve(result)
                }
            )
        })
    },
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
    getAlunoById: (id) => {
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