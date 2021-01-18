var express = require('express');
var router = express.Router();
var axios = require('axios')
var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMDk4MzYyOSwiZXhwIjoxNjExMDEyNDI5fQ.cb6ECaxgdfoCXohjdCph6gxvZTFqN4_SCzP6H4OQV6MvoVvUywhel6PPsZFKra-r9ycV2C8MI6JHWtxPjs_wIPydbbbznZb2Tx-oP37Pg4pVwhn0ds74wexRCF08FjBgeVdjoc_aYPMvFM3F9K0zn9AdM4mHu0O1tJUnQ9UIHZfX_GtxN1NZFmrjRZnd4ZOahbcKw1ODyh4u2ofs4H8eNc3IGwZUtWJaou7LZTrSNU27RnKv6D8f3lIYZJX7DT8XV2XRJwk561zxy_2qOZ7yz5uA1qO4_f54a4gyd2tYcMJMg7w-iCDJGb9lDi0gQgtVPQRB7Oq_INLuCpBxIKxLeA"

router.get('/', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
    .then(dados => res.render('index', {lista: dados.data}))
    .catch(e => res.render('error', {error: e}))
});

router.get('/:cod', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + req.params.cod + '?token=' + token)
    .then(dados => res.render('classe', {lista: dados.data}))
    .catch(e => res.render('error', {error: e}))
});

module.exports = router;
