"use strict"

const axios = require("axios")
const convert = require("xml-js")

const obterBovespa = async (req, res, next) => {
  try {
    axios
      .get(
        `http://bvmf.bmfbovespa.com.br/cotacoes2000/FormConsultaCotacoes.asp?strListaCodigos=MGLU3F`
      )
      .then((res) => res.data)
      .then((xml) => {
        const dataAsJson = JSON.parse(convert.xml2json(xml))
        res.json(dataAsJson)
      })
  } catch {
    next({})
  }
}

module.exports = {
  obterBovespa,
}
