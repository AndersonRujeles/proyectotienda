const express = require('express');
const router= express.Router();
const passport=require('passport');
const {noestalogueado}=require('../lib/valida');
router.get('/registra',noestalogueado,(req,res)=>{
   
   res.render('registros/registra');
  
});

router.post('/registra',noestalogueado,
passport.authenticate('local.registra',{
    successRedirect: '/iniciasesion/login',
    failureRedirect: '/registra',
    failureFlash: true
})
);
      
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