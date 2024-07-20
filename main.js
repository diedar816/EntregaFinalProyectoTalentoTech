const express = require('express');
const path = require('path');
const morgan = require('morgan');

const orders = require("./routers/orders");
const auth = require("./routers/auth");
const comments = require("./routers/comments");
const responses = require("./routers/responses")

let pz = 0;
let pñ = 0;
let prp = 0;

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(morgan('dev'));

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


// rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.use(orders.route);
app.use(auth.route);
app.use(comments.route);
app.use(responses.route);

//resolver las rutas statics
app.use(express.static("public"));

//Rutas motor de vistas ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto:${PORT}`);
});