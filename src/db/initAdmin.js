const { User } = require('./models/users.models');
const { Rol } = require('./models/rol.models');

const bcrypt = require('bcrypt');
const saltRounds = 10;

async function initializeAdminUser() {
  try {
    const existingUsers = await User.findAll();
    
    if (existingUsers.length === 0) {
      const adminRole = await Rol.findOne({ where: { name: 'Administrador' } });
      
      if (adminRole) {
        const hashedPassword = await bcrypt.hash('123456', saltRounds);

        await User.create({
          username: 'admin',
          password: hashedPassword,
          rolId: adminRole.id
        });

        console.log('Default admin user created successfully.');
      } else {
        console.log('Admin role does not exist.');
      }
    } else {
      console.log('Users already exist in the database.');
    }
  } catch (error) {
    console.error('Error initializing admin user:', error);
  }
}

module.exports = { initializeAdminUser };