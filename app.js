const { app } = require('./config');
const db = require('./db');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const { default: nodemon } = require('nodemon');


/*Se tiene su propio servidor, cada sesion tiene un token*/
//Revisar si tiene que estar en config, las siguientes 4 lineas, porque si es asi se debe exportar desde config

//Rutas para las vistas:

//Ruta para el index



//Ruta para el loginsesion



//Ruta para el registro


// Rutas para los mensajes



//Rutas de db
//Rutas para el registro, inicio de sesión, cierre de sesión y consultas

//Ruta para insertar datos con el formulario registros de compras


//Ruta para insertar datos con el formulario de mensajes



//Ruta para inicio de sesion y muestra de resultados en consultas con los formularios loginsesion y consultas


module.exports = app;







