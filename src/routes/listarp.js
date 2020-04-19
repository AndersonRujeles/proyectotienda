const express = require('express');
const router= express.Router();
const pool=require('../database');

router.get('/listarp',async(req,res)=>{
    const muestra=await pool.query('select * from producto');
    res.render('administrador/listaproduc',{muestra});

});

router.get('/delete/:idproducto',async(req,res)=>{
    const {idproducto}=req.params;
    await pool.query('delete from producto where idproducto = ?',[idproducto]);
    res.redirect('../listarp');


});


   module.exports=router;