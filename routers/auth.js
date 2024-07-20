const { Router } = require("express")
const bcrypt = require('bcrypt');

const router = Router()

router.get('/loginsesion', (req, res) => {
    res.render('loginsesion');
});

router.post('/loginsesion', async (req, res) => {
    const { email, contraseña, codigo_de_compra } = req.body;
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
    let i = 0;
    let g = 0;
    let pj = 0;
    db.query('SELECT codigo_compra FROM pedidos', [], async (err, result, campos) => {
        var valor = JSON.parse(JSON.stringify(result));
        console.log(valor);
        console.log(valor.length);
        let h = valor.length;
        console.log(typeof h);
        h = h - 1;
        i = h;
        let f = h - 1;
        console.log(h);
        console.log(i);
        console.log(f);
        let g = valor[i].codigo_compra;
        console.log(g);
        if (confirmacion != g) {
            i = 0;
            while (h != i) {
                g = valor[i].codigo_compra;
                console.log(g);
                if (confirmacion == g) {
                    i = h;
                } else {
                    i = i + 1;

                    if (i > f) {
                        //res.redirect('/');
                        g = 1;
                        console.log(g);
                        console.log("pase por aqui");
                        i = h;
                        console.log(i);
                        console.log(h);
                        let px = 1;
                        console.log(px);
                        pz = 1;
                    }
                }
            }


            console.log("ya sali del while");
            //console.log(px);
            pj = 1;
            console.log(pj);

        }

        console.log("ya sali de la consulta");


        console.log("En el programa principal");
        console.log(pz);
        console.log("tambien por aqui pase por aqui");
        if (pz == 0) {
            db.query('SELECT * FROM compradores WHERE email = ?', [email], async (err, result) => {
                if (err) {
                    console.log(err);
                    res.send('Error al iniciar sesión');
                } else {
                    if (result.length > 0) {
                        const usuario = result[0];
                        if (await bcrypt.compare(contraseña, usuario.contraseña)) {
                            req.session.usuario = usuario;
                            const y = usuario;
                            const veremail = y.email;
                            //console.log("Email a verificar  " + veremail);
                            db.query('SELECT nombre,apellido,telefono,email,dirección,codigo_compra,tipo_producto,cantidad,fecha, compradores_id,idp FROM compradores as c INNER JOIN pedidos as pe ON c.codigoCompraCliente=pe.codigo_compra INNER JOIN productos as pr ON pe.productos_id = pr.id WHERE c.email = ?  && pe.codigo_compra = ?', [veremail, confirmacion], async (error, resultados, campos) => {
                                if (error) {
                                    console.error('Error al ejecutar la consulta:', error);
                                    return;
                                }
                                k = k + 1;
                                var data = JSON.parse(JSON.stringify(resultados));
                                console.log(typeof data[0]);
                                console.log(data[0]);
                                
                                // acceder a cada uno de los valores en el objecto
                                const {nombre, apellido, telefono} = data[0]
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


                                const ñ = data[0].compradores_id;
                                pñ = ñ;
                                console.log(pñ);

                                const rp = data[0].idp;
                                prp = rp;
                                console.log(prp);


                                let mensaje = ("Señor(a) " + p + " " + q + " " + " con el numero de telefono  " + r + ", " + "con el correo " + u + " y en la dirrección " + w + " con el codigo de compra autorizado " + x + " se le entregara " + o + "" + " en una cantidad en libras de " + m + " en la fecha " + n);
                                console.log(mensaje);

                                res.render('consultas', { mensaje, pñ, prp });

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
                    }
                }
            });
        } else {
            pz = 0;
            res.redirect('/');
            //res.render('index', {respuesta: 'Los parametros ingresados no son validos'});
        }
    });
});

router.post('/registros', async (req, res) => {
    const { nombre, apellido, telefono, email, dirección, codigoCompraCliente, contraseña} = req.body;
    const hashedContraseña = await bcrypt.hash(contraseña, 10);

    db.query('INSERT INTO compradores (nombre, apellido, telefono, email, dirección, codigoCompraCliente, contraseña) VALUES (?, ?, ?, ?, ?, ?, ?)',[nombre, apellido, telefono, email, dirección, codigoCompraCliente, hashedContraseña],(err, result)=>{
        if(err) {
            console.log(err);
            res.send('Error al registrar usuario');
        } else {
            console.log(result);
            res.render('registros', {message: 'Usuario Insertado Con Exito'});    
        }
    });
});

module.exports = router