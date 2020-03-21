const express = require('express');
const router= express.Router();
const pool=require('../database');

router.get('/productos',async(req,res)=>{
   const muestra=await pool.query('select idproducto,nombre,estado,precio from producto');
   res.render('links/productos',{muestra});
});




module.exports=router;