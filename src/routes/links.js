const express = require('express');
const router= express.Router();
const pool=require('../database');
const {estalogueado}=require('../lib/valida');

router.get('/productos',estalogueado,async(req,res)=>{
   const muestra=await pool.query('select * from producto');
   res.render('links/productos',{muestra});
});

router.get('/agregar/:idproducto/:nombre/:precio',estalogueado,async(req,res)=>{
   const {idproducto,nombre,precio}=req.params;
   const carrito={idproducto,nombre,precio};
   const result=await pool.query('insert into carrito set ?',[carrito]);
   req.flash('success','Producto agregado correctamente')
   res.redirect('../links/productos');
  
});


module.exports=router;