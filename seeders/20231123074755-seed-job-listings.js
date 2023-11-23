'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JobListings', [
      {
        title: 'Experienced Carpenter Needed',
        description: 'Looking for a skilled carpenter for a 3-week project in New York.',
        location: 'New York, NY',
        budget: 1500.00,
        deadline: new Date('2023-12-31'),
        requiredSkills: 'Carpentry, Woodworking',
        userId: 1, // Ensure this ID exists in your Users table
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Licensed Electrician for Short Term Project',
        description: 'Urgent need for a licensed electrician for a residential project.',
        location: 'Los Angeles, CA',
        budget: 2000.00,
        deadline: new Date('2023-06-30'),
        requiredSkills: 'Electrical Engineering, Safety Management',
        userId: 2, // Ensure this ID exists in your Users table
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more job listing entries as needed
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JobListings', null, {})
  }
}
