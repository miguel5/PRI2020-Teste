// Roteador do servidor API
const { query } = require('express');
var express = require('express');
var router = express.Router();
const Casamento = require('../controllers/casamento')

// Listar casamentos
router.get('/api/casamentos', function(req, res) {
  
  if(req.query.nome){
    Casamento.consulNome(req.query.nome)
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({error: e}))
  }
  else if(req.query.ano){
    Casamento.consulAno(req.query.ano)
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({error: e}))
  }
  else if(req.query.byAno == 'true'){
    Casamento.groupByAno()
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({error: e}))
  }
  else{
    Filme.listar()
      .then(dados => res.status(200).jsonp(dados) )
      .catch(e => res.status(500).jsonp({error: e}))
  }
});

// Consultar um casamento por id
router.get('/api/casamentos/:id', function(req, res) {
  Casamento.consultar(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

// Devolve uma lista de nomes dos noivos, ordenada alfabeticamente, e o id do respetivo registo.
router.get('/api/casamentos', function(req, res) {
  Casamento.noivos()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
})

module.exports = router;
