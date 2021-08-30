const express = require('express')

const alunoRouter = require('./routers/alunoRouter')
const moedaRouter = require('./routers/moedaRouter')

const app = express()

app.get('/alunos/todos', alunoRouter.getAlunos)
app.get('/moeda/:valor_real', moedaRouter.getValorRealCotacao)

app.listen(3000, () => {
  console.log("Servidor na porta 3000")
})