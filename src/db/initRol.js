const { Rol } = require('./models/rol.models');

async function initializeRoles() {
  try {
    const existingRoles = await Rol.findAll();
    
    if (existingRoles.length === 0) {
      await Rol.bulkCreate([
        { name: "Administrador" },
        { name: "Vendedor" }
      ]);

      console.log('Default roles created successfully.');
    } else {
      console.log('Roles already exist in the database.');
    }
  } catch (error) {
    console.error('Error initializing roles:', error);
  }
}

module.exports = { initializeRoles };
