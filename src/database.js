// Configurações de conexão ao banco de dados

require('dotenv').config({ path: 'variaveis.env' })

// importação do módulo MYSQL
const mysql = require('mysql2')
// criar a conexão
const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
})

// conectar a conexão
connection.connect(err => {
    if (err) throw err
    console.log(`connection to database ${process.env.BD_NAME}`)
});
