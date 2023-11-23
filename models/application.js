'use strict'
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate (models) {
      Application.belongsTo(models.User, {
        foreignKey: 'applicantId',
        as: 'applicant',
        onDelete: 'CASCADE'
      })
      Application.belongsTo(models.JobListing, {
        foreignKey: 'jobListingId',
        as: 'jobListing',
        onDelete: 'CASCADE'
      })
    }
  }
  Application.init({
    coverLetter: DataTypes.TEXT,
    applicantId: DataTypes.INTEGER,
    jobListingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Application'
  })
  return Application
}
