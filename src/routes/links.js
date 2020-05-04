const express = require('express');
const router= express.Router();
const pool=require('../database');
const {estalogueado}=require('../lib/valida');

router.get('/productos',estalogueado,async(req,res)=>{
   const muestra=await pool.query('select * from producto');
   res.render('links/productos',{muestra});
});

router.get('/agregar/:idproducto',estalogueado,async(req,res)=>{
   const {idproducto}=req.params;
   const {nombre,precio,cantidad} = req.body;
   const NewCarro ={nombre,precio,cantidad};
   const consulta=await pool.query('select idproducto,nombre,precio from producto where idproducto = ?',[idproducto]);
   console.log(consulta[nombre]); 
   //const result=await pool.query('insert idproducto,nombre,precio into carrito set ? ',[NewCarro]);

   req.flash('success','Producto agregado correctamente')
   res.redirect('../links/productos');
  
});


module.exports=router;