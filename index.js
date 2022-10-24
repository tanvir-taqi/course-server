

const express = require('express')
const app = express()
const port = process.env.port || 5000
const cors = require('cors')


app.get('/',(req,res)=>{
    res.send('hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})


app.listen(port,()=>{
    console.log('app running');
})