const BaseModel = require('./BaseModel')

class Address extends BaseModel {
  static get tableName() {
    return 'addresses'
  }
}


module.exports = Address
