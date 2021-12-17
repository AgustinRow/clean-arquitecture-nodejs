import * as fs from 'fs';
import * as path from 'path';
import Sequelize from 'sequelize';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
import configVar from '../../config/config';

const config = configVar[env];
const models = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

const modelFile = file => {
  const modelPath = __dirname + '/' + file;
  const isDirectory = fs.statSync(modelPath).isDirectory();
  if (isDirectory) {
    return fs.readdirSync(modelPath).filter(file => {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      );
    });
  }
};

fs.readdirSync(__dirname)
  .filter(file => {
    if (file !== basename) {
      return modelFile(file);
    }
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/' + file, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    models[model.name] = model;
  });

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
//sequelize.sync({ alter: true });
models.sequelize = sequelize;
//db.Sequelize = Sequelize;

export default models;
