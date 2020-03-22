const express= require('express');
const morgan= require('morgan');
const exphbs= require('express-handlebars');
const path= require('path');
const flash=require('connect-flash');
const session=require('express-session');
const mysqlsession=require('express-mysql-session');
const{database} = require('./keys');
//inicio
const app= express();

//configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//peticiones
app.use(session({
secret: 'faztmysqlnodesession',
resave: false,
saveUninitialized: false,
store: new mysqlsession(database)

}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//variables globales
app.use((req,res,next)=>{
    app.locals.notifica=req.flash('notifica');
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use(require('./administrativo/administrativos'));
app.use('/registros',require('./routes/registros'));
app.use('/iniciasesion',require('./routes/sesion'));
//public
app.use('/static',express.static(path.join(__dirname,'public')));

//inicia el server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'))
});