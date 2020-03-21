const express = require('express');
const router= express.Router();
const pool=require('../database');

router.get('/registra',(req,res)=>{
  
   res.render('registros/registra');
});

router.post('/registra',async(req,res)=>{
    
   const {nombre,usuario,correo,contrasena}=req.body;
   const registrar={nombre,usuario,correo,contrasena};
   await pool.query('insert into registro set ?',[registrar]);
   res.redirect('/registros/registra',{envio});
   console.log("registro exitoso");
});
module.exports=router;