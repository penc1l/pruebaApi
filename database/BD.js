//llamar a mysql
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    port: 3306
  });

  //hacemos un cath para ver los errores si existen
connection.connect((error => {
    if(error){
        console.log(process.env.BD_PASSWORD);
        console.log('error de conexion es: '+ error);
        return;
    }
    console.log('!Conectado a la base de datos');
}));

module.exports = connection;