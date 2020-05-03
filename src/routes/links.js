const express = require('express');
const router= express.Router();
const pool=require('../database');
const {estalogueado}=require('../lib/valida');

router.get('/productos',estalogueado,async(req,res)=>{
   const muestra=await pool.query('select * from producto');
   res.render('links/productos',{muestra});
});

router.post('/productos',estalogueado,async(req,res)=>{
   const {idproducto,nombre,cantidad,precio}=req.body;
   const carrito={idproducto,nombre,cantidad,precio};
   await pool.query('insert into carrito set ?',[carrito]);
   req.flash('success','Producto agregado correctamente')
   res.redirect('../links/productos');
  
});



module.exports=router;