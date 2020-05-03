const express = require('express');
const router= express.Router();
const pool=require('../database');

router.get('/listaru',async(req,res)=>{
    const muestrausers=await pool.query('select * from registro');
    res.render('administrador/listausers',{muestrausers});

});

router.get('/delete/:idcliente',async(req,res)=>{
    const {idcliente}=req.params;
    await pool.query('delete from registro where idcliente = ?',[idcliente]);
    res.redirect('../listaru');


});


   module.exports=router;