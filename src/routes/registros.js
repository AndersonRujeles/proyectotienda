const express = require('express');
const router= express.Router();

router.get('/registra',(req,res)=>{
   // res.send('oh yeah')
   res.render('registros/registra');
});
module.exports=router;