"use strict"

let jsonData = require("./pedido.json")

const obterPedido = async (req, res, next) => {
  res.set("Cache-Control", "public, max-age=31557600")
  res.json(jsonData)
}

module.exports = {
  obterPedido,
}
