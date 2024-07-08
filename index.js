require('dotenv').config();
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Conectado a DB correctamente")
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Funcionando en el puerto 3000")
    })
})