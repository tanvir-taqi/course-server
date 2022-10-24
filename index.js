

const express = require('express')
const app = express()
const port = process.env.port || 5000
const cors = require('cors')



app.use(cors())

app.get('/courses', (req,res)=>{
    
})

app.get('/',(req,res)=>{
    res.send('hello world!! app is running')
})


app.listen(port,()=>{
    console.log('app running');
})