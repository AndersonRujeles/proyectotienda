const express = require('express');
const router= express.Router();

router.get('/login',(req,res)=>{
    // res.send('oh yeah')
    res.render('iniciasesion/login');
 });
 module.exports=router;