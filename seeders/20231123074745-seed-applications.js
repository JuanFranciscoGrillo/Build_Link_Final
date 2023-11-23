'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Applications', [
      {
        coverLetter: 'I am interested in the construction project and have 5 years of experience.',
        applicantId: 1, // Ensure this ID exists in your Users table
        jobListingId: 1, // Ensure this ID exists in your JobListings table
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coverLetter: 'As an experienced electrician, I believe I would be a great fit for your project.',
        applicantId: 2, // Ensure this ID exists in your Users table
        jobListingId: 2, // Ensure this ID exists in your JobListings table
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more application entries as needed
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Applications', null, {})
  }
}
