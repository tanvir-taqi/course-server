

const express = require('express')
const app = express()
const port = process.env.port || 5000
const cors = require('cors')

const courses = require('./data.json')

app.use(cors())


app.get('/',(req,res)=>{
    res.send('hello world!! app is running')
})

app.get('/courses', (req,res)=>{
    res.send(courses)
})

app.get('/courses/:id',(req,res)=>{
    const selectedCourse = courses.find(course => req.params.id === course._id)
    res.send(selectedCourse)
})


app.listen(port,()=>{
    console.log('app running');
})