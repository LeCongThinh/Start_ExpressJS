const path=require('path')
const express=require('express')
const morgan=require('morgan')
const hand=require('express-handlebars')
const app= express()
const port=3000
//console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')))
//logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars',hand.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/',(req,res)=> {
  res.render('home')
})

app.get('/info',(req,res)=> {
  res.render('info')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })