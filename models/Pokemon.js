const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pokemon_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type_2: {
      type: DataTypes.STRING,
    },
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'team',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon'
  }
);

module.exports = Pokemon;