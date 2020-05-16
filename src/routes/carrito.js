const express = require('express');
const router= express.Router();
const pool=require('../database');
const {estalogueado}=require('../lib/valida');


router.get('/carrito',estalogueado,async(req,res)=>{
    const muestra=await pool.query('select * from carrito');
    const cant=await pool.query('select incremento(cantidad) from carrito');
    const convertir=JSON.stringify(cant);
    console.log(cant); 
    res.render('links/carrito',{muestra});
    
 });

 router.post('/delete-carrito/:idcarrito',estalogueado,async(req,res)=>{
    const {idcarrito}=req.params;
    await pool.query('delete from carrito where idcarrito = ?',[idcarrito]);
    res.redirect('../carrito');
 });


module.exports=router;