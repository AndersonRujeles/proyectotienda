const express = require('express');
const router= express.Router();
const pool=require('../database');
const {estalogueado}=require('../lib/valida');

router.get('/productos',estalogueado,async(req,res)=>{
   const muestra=await pool.query('select * from producto');
   res.render('links/productos',{muestra});
});




module.exports=router;