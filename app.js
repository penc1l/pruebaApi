//variables globales
const dotenv = require('dotenv');
dotenv.config();

//importamos depencidas para su uso
const express = require('express');
const app = express();
const connection = require('./database/BD');
//------------------------------------------------------------

//parsear la informacion de las solicitudes
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//rutas
app.use(require('./routes/index.route')); 

app.listen(80 ,()=>
console.log(`servidor levantado en el puerto 80`)
); 
