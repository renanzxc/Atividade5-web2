function getAlunos(req, res) {
  let alunos = [
    {
      "nome": "João",
      "idade": 17
    },
    {
      "nome": "Antônio",
      "idade": 16
    }
  ]
  res.json(alunos)
}

module.exports = {getAlunos}