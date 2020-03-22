const express = require('express');
const router= express.Router();
const passport=require('passport');


router.get('/cerrarsesion',(req,res)=>{
    req.logOut();
    res.redirect('iniciasesion/login');
});


module.exports=router;