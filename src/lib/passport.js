const passport = require('passport');
const LocalStrategy= require('passport-local').Strategy;
const pool=require('../database');

passport.use('local.registra',new LocalStrategy({
usernameField: 'usuario',
passwordField: 'contrasena',
passReqToCallback: true


}, async(req,usuario,contrasena,done) => {
    const {nombre,correo}=req.body;
    const registrar={nombre,usuario,correo,contrasena};
    await pool.query('insert into registro set ?',[registrar]);

}));

//passport.serializeUser((usuario,done)=>{
//});