res.render('/', {respuesta: 'El codigo de compra no es valido'});


En Index

<% if (respuesta) { %>
        <div class="alert">
            <%- respuesta %>
            <button class = "close-btn" onclick = "this.parentElement.style.display = 'none';">&times;</button> 
        </div>
<% } %>


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <% if (mensaje) { %>
            <script>   
            document.addEventlistener('DOMContentloaded', function () {
                Swal.fire ({
                    title: "La consulta ha sido realizada con exito",
                    text: "Ha sido exitosa",
                    icon: "",
                    confirmButtonText: 'Cerrar'
                    });
            });
        </script>

        <% } %>

window.location.href = '/index'

<a href="registros" class="about__cta">Ingrese y registre su compra</a>

<% window.location.href = '/index' %>

function regreso(){
  window.location.href = '/';
}

setTimeout(regreso, 3000);

CREATE TABLE mensajes(
id int(10) auto_increment not null,
compradores_id int(10) not null,
mensaje varchar(255) not null,
respuesta varchar(255) not null,
CONSTRAINT pk_mensajes PRIMARY KEY (id),
CONSTRAINT fk_compradores FOREIGN KEY (compradores_id) REFERENCES compradores(id)
);


CREATE TABLE mensajes(
id int(10) auto_increment not null,
compradores_id int(10) not null,
mensaje varchar(255) not null,
respuesta varchar(255) not null,
CONSTRAINT pk_mensajes PRIMARY KEY (id),
CONSTRAINT fk_compradores FOREIGN KEY (compradores_id) REFERENCES compradores(id)
);


ALTER TABLE mensajes ADD CONSTRAINT fk_compradores_id FOREIGN KEY (compradores_id) REFERENCES compradores(id)

ALTER TABLE mensajes ADD CONSTRAINT fk_pedidos_id FOREIGN KEY (pedidos_id) REFERENCES pedidos(id) ON DELETE RESTRICT ON UPDATE RESTRICT

La anterior fue la que funciono



fk_compradores FOREIGN KEY (compradores_id) REFERENCES compradores(id)

ALTER TABLE mensajes ADD CONSTRAINT fk_compradores FOREIGN KEY (compradores_id) REFERENCES compradores(id) ON DELETE NO ACTION ON UPDATE NO ACTION;

https://www.youtube.com/watch?v=tXB0yPgICQM

ALTER TABLE `mensajes` ADD CONSTRAINT `pedidos_codigo_compra_mensajes` FOREIGN KEY (`codigo_compra`) REFERENCES `pedidos`(`codigo_compra`) ON DELETE RESTRICT ON UPDATE RESTRICT


`pedidos_codigo_compra_mensajes`

pedidos_codigo_compra_mensajes


ALTER TABLE `mensajes` ADD CONSTRAINT `pedidos_codigo_compra_mensajes` FOREIGN KEY (`codigo_compra`) REFERENCES `pedidos`(`codigo_compra`) ON DELETE RESTRICT ON UPDATE RESTRICT;


ALTER TABLE mensajes ADD CONSTRAINT pedidos_pedidos_id_mensajes FOREIGN KEY (pedidos_id) REFERENCES pedidos(pedidos_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

//Ruta para insertar datos con el formulario de mensajes

/*app.post('/registros', async (req, res) => {
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
});*/

id	
compradores_id	
mensaje	
respuesta	
pedidos_id


compradores_id	
pedidos_id


compradores_id, pedidos_id


<% if (mensaje) { %>
            <div class="alert">
                <%- mensaje %>
                <button class = "close-btn" onclick = "this.parentElement.style.display = 'none';">&times;</button>
                  <script>
                  function regreso(){
                    window.location.href = '/';
                  }
                  setTimeout(regreso, 6000);
                  </script>
            </div>
            
    
        <% } %>


WHERE mensajes.compradores_id = pñ  && mensajes.pedidos_id = prp'

mensajes.compradores_id	
mensajes.pedidos_id

INSERT INTO mensajes (mensaje) VALUES ('Hola a todos') WHERE mensajes.compradores_id =  && mensajes.pedidos_id = ;

UPDATE mensajes SET mensaje = (mensaje) VALUES (?) WHERE mensajes.compradores_id = pñ  && mensajes.pedidos_id = prp;

UPDATE mensajes SET mensaje = "Primer Ajuste" WHERE mensajes.compradores_id = 1  && mensajes.pedidos_id = 1;


https://es.stackoverflow.com/questions/595654/extraer-datos-de-mysql-con-javascript-para-mostrar-el-resultado-en-html

req.body

https://stackoverflow.com/questions/58791164/how-is-req-body-correctly-mapped-to-the-const-array-of-variables-in-here

req.params

https://stackoverflow.com/questions/20089582/how-to-get-a-url-parameter-in-express/20089634#20089634

La diferencia entre los dos

https://es.stackoverflow.com/questions/302541/en-que-caso-se-usa-req-params-req-query-y-req-body

jonathan mircha

jonmircha

app.get('/mensajes/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT mensajes.respuesta FROM mensajes WHERE id = ? && comprador_id.mensajes = pñ && pedido_id.mensajes = prp', [id,pñ,prp], (err, result) => {
        if(err) {
            console.log(err);
            return res.status(500).send('Error al consultar respuesta');
        }else {
            console.log(result);
            res.render('mensajes', {respuesta: result[0].mensajes});
            //res.send('Respuesta consultada con exito!');
        }
    });
});

<% if (respuestaentregada) { %>
                            <%- respuestaentregada %>
                              <script>
                              function regreso(){
                                window.location.href = '/';
                              }
                              setTimeout(regreso, 6000);
                              </script>
                    <% } %>



SELECT mensajes.respuesta FROM mensajes WHERE mensajes.compradores_id = 6 && mensajes.pedidos_id = 5;


<% if (comentario) { %>
        <div class="alert">
            <%- comentario %>
            <button class = "close-btn" onclick = "this.parentElement.style.display = 'none';">&times;</button>
              <script>
              function regreso(){
                window.location.href = '/';
              }
              setTimeout(regreso, 6000);
              </script>
        </div>
<% } %>
	
https://www.freecodecamp.org/espanol/news/boton-html-onclick-tutorial-de-evento-de-clic-en-javascript/
	
	
	




`  `



`  `
