

const express = require('express')
const path =  require('path')
const router = require('./routes')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.urlencoded({extended: true}))
app.use(router)

const PORT = 3000

app.listen(PORT,()=>{console.log("servidor iniciado")})
