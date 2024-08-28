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
    }
}