const server=require("./api/server")
const PORT=process.env.PORT || 10000

server.listen(PORT, ()=>{
    console.log(`Server ${PORT} da çalışıyor`)
})