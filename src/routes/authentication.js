const express = require('express');
const router= express.Router();
const pool=require('../database');
const passport=require('../lib/passport');
router.get('/registra',(req,res)=>{
  
   res.render('registros/registra');
  
});

router.post('/registra',async(req,res)=>{
   passport.authenticate('local.registra',{
       successRedirect: '/login',
       failureRedirect: '/registra',
       failureFlash: false
   })
     res.redirect('../registros/registra');
    });

    router.get('/login',(req,res)=>{
        res.render('iniciasesion/login');
     });

module.exports=router;