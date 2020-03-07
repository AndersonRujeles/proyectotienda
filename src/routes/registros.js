const express = require('express');
const router= express.Router();

router.get('/login',(req,res)=>{
   // res.send('oh yeah')
   res.render('registros/login');
});
module.exports=router;