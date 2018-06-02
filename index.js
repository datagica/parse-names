'use strict'
const ParseEntities = require('@datagica/parse-entities')
const data = require('./database.json').map(name => ({ ...name, id: name.name }))
class Parser extends ParseEntities {
  constructor(opts) {
    super({
      fields: ['name'],
      data,
      maxLength: 1,
      // spellings: (map, name) => {}
    })
  }
}
const singletonInstance = new Parser()
const singletonMethod = function() { return singletonInstance.parse.apply(singletonInstance, arguments) }
module.exports = singletonMethod
module.exports.default = singletonMethod
module.exports.database = data
module.exports.parser = singletonInstance
module.exports.Parser = Parser