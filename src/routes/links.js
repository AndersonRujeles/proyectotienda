const express = require('express');
const router= express.Router();

router.get('/productos',(req,res)=>{
   // res.send('oh yeah')
   res.render('links/productos');
});
module.exports=router;