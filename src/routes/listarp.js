const express = require('express');
const router= express.Router();
const pool=require('../database');

router.get('/listarp',async(req,res)=>{
    const muestra=await pool.query('select * from producto');
    res.render('administrador/listaproduc',{muestra});

});

router.get('/listarusers',async(req,res)=>{
    const muestrausers=await pool.query('select * from registro');
    res.render('administrador/listausers',{muestrausers});

});

   module.exports=router;