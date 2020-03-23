const express = require('express');
const router= express.Router();
const {estalogueado}=require('../lib/valida');

router.get('/admin',estalogueado,(req,res)=>{
  res.render('index/admin');
 });

 router.get('/add',estalogueado,(req,res)=>{
  res.render('administrador/addproduc');
 });

module.exports=router;