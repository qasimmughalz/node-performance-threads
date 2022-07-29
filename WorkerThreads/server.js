

const http = require('http')
const express = require('express')
const {Worker} = require('worker_threads')
const app = express()
const PORT = process.env.PORT || 8000

console.log(Worker.defaultMaxListeners)

app.get('/', (req, res)=>{
    res.status(200).send('Hi')
})

app.get('/async', (req, res)=>{
    const counterWorker = new Worker('./worker.js')
    counterWorker.on('message', (total)=>{
        res.status(200).send(`Total is : ${total}`)
    })
})



app.listen(PORT , ()=> console.log(`Listening to ${PORT} ...`))