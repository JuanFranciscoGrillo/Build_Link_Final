'use strict'

const bcrypt = require('bcryptjs') // Ensure bcryptjs is installed for password hashing

module.exports = {
  async up (queryInterface, Sequelize) {
    // Hash a sample password for seeding
    const hashedPassword = bcrypt.hashSync('yourPassword123', 10) // Replace with a secure password

    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more users as needed
    ], {})
  },

  async down (queryInterface, Sequelize) {
    // Remove all seeded users
    await queryInterface.bulkDelete('User', null, {})
  }
}
