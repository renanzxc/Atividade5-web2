const https = require('https');

function fazerRequisicao(valorReal) {
  return new Promise ((resolve, reject) => {  
    let req = https.get(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_KEY}/pair/USD/BRL/${valorReal}`, (res) => {
      res.on('data', (d) => {
        resolve(JSON.parse(d))
      })
    })
    
    req.on('error', (error) => {
      console.error(error)
    })
    
    req.end()
  }); 
}

async function getValorRealCotacao(req, res) {
  let valorReal = req.params.valor_real
  let valorDolar = 0

  await fazerRequisicao(valorReal).
  then((res)=>{
    valorDolar = res.conversion_result
    return
  })

  res.json({valor_dolar: valorDolar})
}

module.exports = {getValorRealCotacao}