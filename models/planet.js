let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Planet'


let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No description included'
  },
  color: {
    type: String,
    enum: [
      'red',
      'yellow',
      'blue',
      'orange',
      'white',
      'black'
    ],
    required: true
  },

  galaxyId: {
    type: ObjectId,
    ref: 'Galaxy',
    required: true
  },

  starId: {
    type: ObjectId,
    ref: 'Star',
    required: true
  }

})

module.exports = mongoose.model(schemaName, schema)