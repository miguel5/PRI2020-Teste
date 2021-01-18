const mongoose = require('mongoose')

var casamentoSchema = new mongoose.Schema({
    date: { type: String, required: true },
    title: { type: String, required: true },
    ref: { type: String, required: true },
    href: { type: String, required: true }
  });

module.exports = mongoose.model('casamento', casamentoSchema)