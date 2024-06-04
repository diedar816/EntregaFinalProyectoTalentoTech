const { app } = require('./config');
const db = require('./db');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const { default: nodemon } = require('nodemon');

/*Se tiene su propio servidor, cada sesion tiene un token*/
//Revisar si tiene que estar en config, las siguientes 4 lineas, porque si es asi se debe exportar desde config
app.use(session({
    secret: 'mysecretKey',
    resave: false,
    saveUninitialized: true
}));

/*Se configura el body Parser*, para analizar solicitud de guardar información de tipo POST*/

app.use(bodyParser.urlencoded({ extended: true }));

//Middleware para proteger rutas
function isAthenticated(req, res, next){
    if(req.session.usuario){
        return next();
    }else{
        res.redirect('/loginsesion');
    }
}

//Rutas para las vistas:

//Ruta para el index

app.get('/', (req, res) => {
    res.render('index');
});

//Ruta para el loginsesion

app.get('/loginsesion', (req, res) => {
    res.render('loginsesion');
});

//Ruta para el registro

app.get('/registros', (req, res) => {
    res.render('registros');
});

// Rutas para las consultas

app.get('/consultas', (req, res) => {
    res.render('consultas');
});

//Rutas de db
//Rutas para el registro, inicio de sesión, cierre de sesión y consultas

//Ruta para insertar datos con el formulario registros de compras

app.post('/registros', async (req, res) => {
    const { nombre, apellido, telefono, email, dirección, codigoCompraCliente, contraseña} = req.body;
    const hashedContraseña = await bcrypt.hash(contraseña, 10);

    db.query('INSERT INTO compradores (nombre, apellido, telefono, email, dirección, codigoCompraCliente, contraseña) VALUES (?, ?, ?, ?, ?, ?, ?)',[nombre, apellido, telefono, email, dirección, codigoCompraCliente, hashedContraseña],(err, result)=>{
        if(err) {
            console.log(err);
            res.send('Error al registrar usuario');
        } else {
            console.log(result);
            res.render('index', {message: 'Nos pondremos en contacto contigo en la brevedad'});    
        }
    });
});

//Ruta para inicio de sesion y muestra de resultados en consultas con los formularios loginsesion y consultas

app.post('/loginsesion', async (req, res) => {
    const { email, contraseña, codigo_de_compra} = req.body;
    //console.log("requerimiento", req.body);
    var data1 = JSON.stringify(req.body);
    //console.log(data1);
    var data2 = JSON.parse(data1);
    //console.log(data2);
    const validacion = data2.codigo_de_compra;
    //console.log(typeof validacion);
    //console.log(validacion);
    confirmacion = Number(validacion);
    console.log(typeof confirmacion);
    console.log(confirmacion);
    let k = 0;
    db.query('SELECT codigo_compra FROM pedidos', [], async (err, result,campos) => {
        var valor = JSON.parse(JSON.stringify(result));
        console.log(valor);
        console.log(valor.length);
        let i = 0;
        let h = valor.length;
        console.log(typeof h);
        h = h - 1;
        comparador = valor[i].codigo_compra;
        while (confirmacion != comparador) {
            i = i + 1;
            console.log(i);
            console.log(h);
            if (i <= h){
                comparador = valor[i].codigo_compra;
                console.log("ciclo");
            }else{try { if (k == 0) {
                
                throw new Error('Orden de compra no valida');
                 
            }
                
            } catch (error) {console.error('Error:', error.message);
                
            }
                
            }    
        }
    });
        
    db.query('SELECT * FROM compradores WHERE email = ?', [email], async (err, result) => {
        
        if(err){
            console.log(err);
            res.send('Error al iniciar sesión');
        } else {
            if(result.length > 0) {
                const usuario = result[0];
                if(await bcrypt.compare(contraseña, usuario.contraseña)){
                    req.session.usuario = usuario;
                    const y = usuario;
                    const veremail = y.email;
                    //console.log("Email a verificar  " + veremail);
                    db.query('SELECT nombre,apellido,telefono,email,dirección,codigo_compra,tipo_producto,cantidad,fecha FROM compradores as c INNER JOIN pedidos as pe ON c.codigoCompraCliente=pe.codigo_compra INNER JOIN productos as pr ON pe.productos_id = pr.id WHERE c.email = ?  && pe.codigo_compra = ?', [veremail, confirmacion], async (error, resultados, campos) => {
                        if (error) {
                          console.error('Error al ejecutar la consulta:', error);
                          return;
                        }

                        k = k + 1;
                        var data = JSON.parse(JSON.stringify(resultados));
                        console.log(typeof data[0]);
                        console.log(data[0]);
                        //console.log("Debe pasar por aqui cuando esta bien");

                        const p = data[0].nombre;
                        //console.log(typeof p);
                        //console.log(p);

                        const q = data[0].apellido;
                        //console.log(typeof q);
                        //console.log(q);
                                                
                        const r = data[0].telefono;
                        //console.log(typeof r);
                        //console.log(r);

                        const u = data[0].email;
                        //console.log(typeof u);
                        //console.log(u);

                        const w = data[0].dirección;
                        //console.log(typeof w);
                        //console.log(w);

                        const x = data[0].codigo_compra;
                        //console.log(typeof x);
                        //console.log(x);

                        const o = data[0].tipo_producto;
                        //console.log(typeof o);
                        //console.log(o);

                        const m = data[0].cantidad;
                        //console.log(typeof m);
                        //console.log(m);

                        let fechaIso8601 = data[0].fecha;
                        fechaIso8601 = fechaIso8601.replace(/\D+/g, ' ');
                        let j = fechaIso8601.split(' ');
                        //console.log(j);
                        let n = j[0] + j[1] + j[2];
                        //console.log(typeof n);
                        //console.log(n);

                        let mensaje = ("Señor(a) " + p + " " + q + " " + " con el numero de telefono  " + r + ", " + "con el correo "+ u + " y en la dirrección "+ w + " con el codigo de compra autorizado " + x + " se le entregara " + o + "" + " en una cantidad en libras de " + m + " en la fecha " + n);
                        console.log(mensaje);
                        
                        res.render('consultas', {mensaje});
                        
                    });  
                } else {
                    //res.send('Credenciales incorrectas');
                    if (k == 0) {
                    res.redirect('/');
                   }
                }
            } else {
                if (k == 0) {
                    res.redirect('/');
                   }
                //res.render('/');
                
            }
        }
    });
});

module.exports = app;







