const express = require("express") 

const app = express()
const porta =  3333 // Uma constante

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
} // Uma função

app.listen(porta, mostraPorta)

