//Importação do database
const database = require('../database')

module.exports = {
    //métado para consultar os curso
    readcursos: () => {
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