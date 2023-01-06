//variables globales
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});
//dotenv.config();

//importamos depencidas para su uso
const cors = require('cors-express');
const express = require('express');
const app = express();
const connection = require('./database/BD');
//------------------------------------------------------------
//uso de cors
//llamamos a cors
app.use(cors());
//parsear la informacion de las solicitudes
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//rutas
app.use(require('./routes/index.route')); 


app.listen(process.env.PORT ,()=>{

    console.log(`servidor levantado en el puerto ` + process.env.PORT )
});

