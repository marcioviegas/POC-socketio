import express from 'express'

const SERVER_PORT = process.env.SERVER_PORT || 9999;

var app = express();


app.get("/", (req, res, next) => {
    res.send("Hello World")
})



app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))