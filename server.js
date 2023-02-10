const express =require('express')
const app=express()
const fs=require('fs')

const port=3000
app.get('/',(req,res)=>{fs.readFile( __dirname + "/" + "product_list.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
 });})
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "product_list.json", 'utf8', function (err, data) {
        //get list
       var products = JSON.parse( data )
       //get product with product_id
       var product = products["product" + req.params.id] 
       //console.log( product )
       res.end( JSON.stringify(product))
    });
 })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })