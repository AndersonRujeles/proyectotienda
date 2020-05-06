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

router.get('/modificar_usuario/:idcliente',async(req,res)=>{
    const {idcliente}=req.params;
    const usuario_id =await pool.query('select * from registro where idcliente = ?',[idcliente]);
    res.render('administrador/modificaruser',{usuario_id});
});

router.post('/modificar_usuario/:idcliente',async(req,res)=>{
    const {idcliente}=req.params;
    const {nombre,username,correo}=req.body;
    const actualizausuario={nombre,username,correo};
    await pool.query('update registro set ? where idcliente = ?',[actualizausuario,idcliente]);
    res.redirect('../listaru');
});




   module.exports=router;