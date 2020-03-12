// Chamando as dependencias da nossa aplicação
const express = require('express')
const http = require('http')

// Iniciando a aplicação
const app = express()
const routes = require('./routes/route')

// Importando rotas
app.use(express.json())
app.use(routes)

// 200 OK
// 400 BAD REQUEST
// 500 ERRO DE SERVIDOR
// 401 NÃO AUTORIZADO
/* app.use('/cat', (req, res, next) => {
    res.status(200).send({
        meow: 'i am a cat'
    })
}) */

// Iniciando aplicação na porta 7000
const httpServer = http.createServer(app)
httpServer.listen(7000, () => {
    console.log('Aplicação rodando na porta 7000')
})