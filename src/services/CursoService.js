//Importação do database
const { query } = require('express')
const { seach } = require('../routes')
const database = require('../database')


module.exports = {
    //métado para consultar os curso
    readCursos: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM curso', (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    // Métado para cadastrar um curso
    createCurso: (nome) => {
        return new Promise((resolve,reject) => {
        database.query(`INSERT INTO curso VALUES (null, "${nome}", null)`, (err, result)=>{
            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
        })
    }
}