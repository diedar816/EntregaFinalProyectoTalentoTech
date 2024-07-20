const {Router} = require("express")
const router = Router()

router.post('/mensajes', (req, res) => {
    console.log('Para  intentar ver la respuesta');  
 //   const {} = req.body;
    db.query('SELECT respuesta FROM mensajes WHERE mensajes.compradores_id = ? && mensajes.pedidos_id = ?', [pñ,prp], (err, result) => {
        if(err) {
            console.log(err);
            return res.status(500).send('Error al consultar respuesta');
        }else {
            var data2 = JSON.parse(JSON.stringify(result));
            console.log(typeof data2[0]);
            console.log(data2[0]);
            const res = data2[0].respuesta;
            console.log(res);
            //res.render('mensajes', {respuestaentregada: result[0].respuesta});
            //res.send('Respuesta consultada con exito!');
        }
    });
})

module.exports = router