const express= require('express');
const router= express.Router();
const pool=require('../database');


router.get('/index',async(req,res)=>{

     res.render('index/inicio');
});

module.exports=router;