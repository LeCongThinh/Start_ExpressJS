const express=require('express')
const app= express()
const port=3000
app.get('/a',(req,res)=> {return res.send('helllo ae')})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })