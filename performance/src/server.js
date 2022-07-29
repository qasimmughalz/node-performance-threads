const http = require('http')
const app = require('./app')
const clusters = require('cluster')


//In progress task

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

e
if(clusters.isMaster){
    console.log("Master Processes")
    clusters.fork() 
    clusters.fork()
}else{
    console.log("Worker Processes")
    server.listen(PORT, ()=> console.log(`Listenig to the ${PORT} ....`))
}




