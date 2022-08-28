const express = require('express')
const app = express()

const jsonData = {count: 12, message: 'hey'}
const PORT = 3000
app.get('/',(req, res) => {
    res.sendFile(__dirname + "/index.html", (e) =>{
        if(e){
            res.status(500).send(e)
        }
    })
})

app.get('/data',(req, res) => {
    res.json(jsonData)
})

app.listen(PORT, () => {
    console.log("started serve at: " + PORT)
})