const express = require('express');
const router= express.Router();
const pool=require('../database');
const {estalogueado}=require('../lib/valida');


router.get('/carrito',estalogueado,async(req,res)=>{
    const muestra=await pool.query('select * from carrito');
    const cant=await pool.query('select sum(cantidad) from carrito');
    console.log(cant);
    res.render('links/carrito',{muestra,cant});
 });



module.exports=router;