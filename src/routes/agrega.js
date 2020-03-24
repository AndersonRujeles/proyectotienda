const express = require('express');
const router= express.Router();
const pool=require('../database');

router.get('/agrega',(req,res)=>{
    res.render('administrador/addproduc');
   });


router.post('/agrega',async(req,res)=>{
   const {nombre,descripcion,precio,url1,color}=req.body;
   const agregar={nombre,descripcion,precio,url1,color};
   const result=await pool.query('insert into producto set ?',[agregar]);
   console.log("guardado exitoso");
});
module.exports=router;