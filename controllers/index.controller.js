//construir un objeto que podamos exportar se contruye asi
const controller= {}
//importamos para las consultas las dependencias
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const connection = require('../database/BD');
const bcrypt = require('bcryptjs');

controller.index = (req,res)=>{
    res.send('tu primera pagina api');
}

//consultas
controller.login = (req,res)=>{
    const { user_email, user_password } = req.body;
   //console.log(req.body.user_password);
   
    connection.query(
      'SELECT clave, idusuario FROM usuarios WHERE BINARY usuario = ? ',
      [user_email, user_password],
      (error, results) => {
        if (error) throw error;
  
        if (results.length === 0) {
          return res.status(401).send({ error: 'Invalid username or password' });
        }
        //console.log(results[0].clave);
        const hash = results[0].clave; 
         const id = results[0].idusuario; 
        // Compara la contraseña cifrada con la contraseña dada
        const isMatch = bcrypt.compareSync(user_password, hash);

        //compara contraseñas
        if (isMatch) {          
          
        // Si el usuario y la contraseña son válidos, genere un token JWS
        const payload = {
          userId:user_email,
      };

      const token = jwt.sign(payload, process.env.API_SECRET, {
          expiresIn: '1h',
        });     
        //console.log('correcto', token);       
       res.json( 
        {
          id,
          token
        }
        
        );
          console.log(id,token);  
        } else {
          // Si la contraseña es incorrecta, muestra un mensaje de error
          return res.status(401).send({ error: 'Invalid password' });
         
        }    
      }
    );


    
}

module.exports = controller