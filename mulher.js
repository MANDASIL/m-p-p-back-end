const express = require("express")
const router = express.Router() 

const app = express()
const porta =  3333 // Uma constante

function mostraMulher(request, response) {
    response.json({
        nome: "Amanda Silva",
        imagem:"https://media.licdn.com/dms/image/C4E03AQHcqZAZGBs63A/profile-displayphoto-shrink_400_400/0/1638408136843?e=1697068800&v=beta&t=P8szTv0NBQSd-jiDuAemCQLomGfV58hCzbnwXnw2JmM",
        minibio:'Programadora junior em JavaScrit'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
} // Uma função

app.use(router.get("/mulher",mostraMulher))
app.listen(porta, mostraPorta)