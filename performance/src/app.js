const express = require('express')


const app = express()

app.get('/', (req, res) => {
    res.send(`Hello ${process.pid}`)
})


app.get('/time', (req, res) => {
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total += i;
    }
    res.send(`Total: ${total} count at worker process : ${process.pid}`)

})




module.exports = app