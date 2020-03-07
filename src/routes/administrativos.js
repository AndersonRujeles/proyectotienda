const express = require('express');
const router= express.Router();

router.get('/agregar',(req,res)=>{
    res.send('oh yeah');
    //res.render('links/add');
    console.log('yo soy consol');
    const primera='soy primera';
 });
module.exports=router;