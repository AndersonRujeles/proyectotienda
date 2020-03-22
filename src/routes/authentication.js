const express = require('express');
const router= express.Router();
const passport=require('passport');
 
router.get('/registra',(req,res)=>{
  
   res.render('registros/registra');
  
});

router.post('/registra',passport.authenticate('local.registra',{
    successRedirect: '/iniciasesion/login',
    failureRedirect: '/registra',
    failureFlash: true
}));
      
router.get('/login',(req,res)=>{
        res.render('iniciasesion/login');
});

router.post('/login',(req,res,next)=>{
passport.authenticate('local.inicio',{
    successRedirect: '/admin',
    failureRedirect: '/iniciasesion/login',
    failureFlash: true
})(req,res,next);
});

module.exports=router;