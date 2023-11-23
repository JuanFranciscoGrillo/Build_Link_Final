'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        content: 'Hello, I am interested in your job listing.',
        senderId: 1, // Ensure this ID exists in your Users table
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Can you provide more details about the project?',
        senderId: 2, // Ensure this ID exists in your Users table
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more message entries as needed
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {})
  }
}
