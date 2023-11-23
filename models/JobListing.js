// models/joblisting.js
'use strict'
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    static associate (models) {
      JobListing.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE'
      })
      JobListing.hasMany(models.Application, {
        foreignKey: 'jobListingId',
        as: 'applications'
      })
    }
  }
  JobListing.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    budget: DataTypes.DECIMAL,
    deadline: DataTypes.DATE,
    requiredSkills: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobListing'
  })
  return JobListing
}
