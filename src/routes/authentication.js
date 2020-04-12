const express = require('express');
const router= express.Router();
const passport=require('passport');
const {noestalogueado}=require('../lib/valida');
const {validacion}=require('../lib/valor');


router.get('/registra',noestalogueado,(req,res)=>{
   
   res.render('registros/registra');
  
});

router.post('/registra',(req,res,next)=>{
passport.authenticate('local.registra',{
    successRedirect: '/iniciasesion/login', 
    failureRedirect: '/registra',
    failureFlash: true,
    
})(req,res,next);
});
      
router.get('/login',(req,res)=>{
        res.render('iniciasesion/login');
});

router.post('/login',noestalogueado,(req,res,next)=>{
passport.authenticate('local.inicio',{
    successRedirect: '/index',
    failureRedirect: '/iniciasesion/login',
    failureFlash: true
})(req,res,next);
});


module.exports=router;