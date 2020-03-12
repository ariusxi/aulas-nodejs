// Chamando depedencias e iniciando rota
const {Router} = require('express')
const route = Router()

const UserController = require('../controllers/UserController')

// Definindo as rotas de acesso da API
route.get('/get/:id/update/:name', (req, res, next) =>{
    res.status(200).send({
        meow: req.params.id,
        name: req.params.name,
    })
})

route.get('/sabella', (req, res, next) => {
    res.status(200).send({
        name: 'sabella a backend'
    })
})

route.post('/register', UserController.register)

// GET - Acessei uma url deverá ser mostrado o conteudo apenas para consutla
// POST - Adicionar ou submeter informações para cadastro geralmento
// PUT/PATCH - Comumente utilizado para realizar alterações de dados
// DELETE - Utilizado apenas para deletar dados

// Exportando rotas
module.exports = route