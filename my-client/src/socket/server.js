const express = require("express")
const http = require("http")
var Request = require("request");
const socketIo = require('socket.io')
const axios = require("axios")

const port = process.env.PORT || 4001
const index = require("./index")

const app = express()
app.use(index)

const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', socket => {
    console.log("new connection"), setInterval(
        ()=>getApiAndEmit(socket),2000
    )
    socket.on("disconnect", () => console.log("connection disconnect"))
})

const getApiAndEmit = async socket => {
    // try{
    //     const res = await axios.get(
    //         "https://www.tradedesk.zecoex.com/currency_api/trade_market_price.php"
    //     )
    //     socket.emit("FromApi", res)
    // } catch(err) {
    //     console.error("Error ", err)
    // }

    Request.get("https://www.tradedesk.zecoex.com/currency_api/trade_market_price.php", { json: true }, (error, response, body) => {
            if(error) {
                return console.error(error);
            }
            socket.emit("FromApi", body)
        })
}
server.listen(port, () => console.log('Listening port ', port))




// io.on('connection',(client)=>{
    
//     client.on('subscribeToTimer',(interval)=>{
//         console.log('server interval is: ',interval)
//         setInterval(()=>{
 
//     // handle success
//     Request.get("https://www.tradedesk.zecoex.com/currency_api/trade_market_price.php", { json: true }, (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     data = body
// })

// client.emit('timer',data)
// },interval)
//     })
// })

// const port = 8000
// io.listen(port)
// console.log('listning on port ', port)