'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../../config/config.js')[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

const modelFile = file => {
  const modelPath = __dirname + '/' + file
  const isDirectory = fs.statSync(modelPath).isDirectory()
  if (isDirectory) {
    return fs.readdirSync(modelPath).filter(file => {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      )
    })
  }
}

fs.readdirSync(__dirname)
  .filter(file => {
    if (file !== basename) {
      return modelFile(file)
    }
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/' + file, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
