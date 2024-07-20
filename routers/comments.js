const {Router} = require("express")

const router = Router()

router.post('/mensajes', async (req,res) => {
    const {mensaje} = req.body;
    db.query('UPDATE mensajes SET mensajes.mensaje = ? WHERE mensajes.compradores_id = ?  && mensajes.pedidos_id = ?',[mensaje,pñ,prp],(err, result)=>{
        if(err) {
            console.log(err);
            res.send('Error al registrar el mensaje');
        } else {
            console.log(result);
            console.log('Mensaje Actualizado Con Exito');
            res.render('mensajes', {});    
        }
    });
});

router.get('/mensajes', (req, res) => {
    res.render('mensajes');
});


module.exports = router