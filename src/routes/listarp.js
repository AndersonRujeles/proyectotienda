const express = require('express');
const router= express.Router();
const pool=require('../database');

router.get('/listarp',async(req,res)=>{
    const muestra=await pool.query('select * from producto');
    res.render('administrador/listaproduc',{muestra});

});

router.get('/delete/:idproducto',async(req,res)=>{
    const {idproducto}=req.params;
    await pool.query('delete from producto where idproducto = ?',[idproducto]);
    res.redirect('../listarp');
});

/*router.get('/modificar_producto/:idproducto',async(req,res)=>{
    const {idproducto}=req.params;
    const producto_id =await pool.query('select * from producto where idproducto = ?',[idproducto]);
    res.render('administrador/modificarproduc',{producto_id});
});
*/

router.post('/modificar_producto/:idproducto',async(req,res)=>{
    const {idproducto}=req.params;
    console.log(idproducto);
    const {nombre,descripcion,precio}=req.body;
    const actualizaproduc={nombre,descripcion,precio};
    const productoact=await pool.query('UPDATE producto set ? where idproducto = ?',[req.body,idproducto]);
    res.redirect('../listarp');
});




   module.exports=router;