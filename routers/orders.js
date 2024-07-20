const {Router} = require("express")
const router = Router()

router.get('/orders/registros', (req, res) => {
    res.render('registros', {message:null});
});

// Rutas para las consultas

router.get('/orders/consultas', (req, res) => {
    res.render('consultas');
});


module.exports = router