// Controlador para o modelo Filme

var Casamento = require('../models/casamento')

// Devolve a lista de casamentos
module.exports.listar = () => {
    return Casamento
        .find({}, {_id: 0, date: true, title: true, ref: true})
        .sort('-data')
        .exec()
}

module.exports.consultar = id => {
    return Casamento
        .findOne({ref: id})
        .exec()
}

module.exports.consulNome = nome => {
    return Casamento
        .find({ "title": { "$regex": nome, "$options": "i"}})
        .exec()
}

module.exports.consulAno = ano => {
    return Casamento
        .find({ "date": { "$regex": ano, "$options": "i"}})
        .exec()
}

module.exports.groupByAno = () => {
    return Casamento
        .aggregate([
                    {$group: {
                        _id: "$date",
                        casamentos: {$push: {title: "$title", id: "$ref"}}
                    }}
        ])
        .exec()
}

module.exports.noivos = () => {
    return Casamento
        .aggregate([
                    {$group: {
                        _id: "$title",
                        ref: "$ref"
                    }}
        ])
        .exec()
}