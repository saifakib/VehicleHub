const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Import models
const { Manufacturer, Model: CarModel, Year } = require('./src/model');

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectionURL);
    console.log('Database Connected!!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Seed data
const seedData = async () => {
  try {
    // Clear existing data
    await Manufacturer.deleteMany({});
    await CarModel.deleteMany({});
    await Year.deleteMany({});

    console.log('Existing data cleared!');

    // Seed manufacturers
    const manufacturers = await Manufacturer.insertMany([
      { name: 'Toyota', country: 'Japan' },
      { name: 'Ford', country: 'USA' },
      { name: 'BMW', country: 'Germany' },
      { name: 'Honda', country: 'Japan' },
      { name: 'Mercedes-Benz', country: 'Germany' },
      { name: 'Chevrolet', country: 'USA' },
      { name: 'Hyundai', country: 'South Korea' },
      { name: 'Kia', country: 'South Korea' },
      { name: 'Nissan', country: 'Japan' },
      { name: 'Volkswagen', country: 'Germany' },
      { name: 'Subaru', country: 'Japan' },
      { name: 'Mazda', country: 'Japan' },
      { name: 'Audi', country: 'Germany' },
      { name: 'Tesla', country: 'USA' },
      { name: 'Porsche', country: 'Germany' },
      { name: 'Jaguar', country: 'UK' },
      { name: 'Land Rover', country: 'UK' },
      { name: 'Ferrari', country: 'Italy' },
      { name: 'Lamborghini', country: 'Italy' },
      { name: 'Volvo', country: 'Sweden' },
    ]);
    
    console.log('Manufacturers seeded:', manufacturers);

    // Seed models
    const models = await CarModel.insertMany([
      // Toyota
      { name: 'Corolla', manufacturer: manufacturers[0]._id },
      { name: 'Camry', manufacturer: manufacturers[0]._id },
      { name: 'RAV4', manufacturer: manufacturers[0]._id },
      { name: 'Highlander', manufacturer: manufacturers[0]._id },
    
      // Ford
      { name: 'F-150', manufacturer: manufacturers[1]._id },
      { name: 'Mustang', manufacturer: manufacturers[1]._id },
      { name: 'Explorer', manufacturer: manufacturers[1]._id },
      { name: 'Escape', manufacturer: manufacturers[1]._id },
    
      // BMW
      { name: 'X5', manufacturer: manufacturers[2]._id },
      { name: '3 Series', manufacturer: manufacturers[2]._id },
      { name: '5 Series', manufacturer: manufacturers[2]._id },
      { name: 'X3', manufacturer: manufacturers[2]._id },
    
      // Honda
      { name: 'Civic', manufacturer: manufacturers[3]._id },
      { name: 'Accord', manufacturer: manufacturers[3]._id },
      { name: 'CR-V', manufacturer: manufacturers[3]._id },
      { name: 'Pilot', manufacturer: manufacturers[3]._id },
    
      // Mercedes-Benz
      { name: 'C-Class', manufacturer: manufacturers[4]._id },
      { name: 'E-Class', manufacturer: manufacturers[4]._id },
      { name: 'GLC', manufacturer: manufacturers[4]._id },
      { name: 'GLE', manufacturer: manufacturers[4]._id },
    
      // Chevrolet
      { name: 'Silverado', manufacturer: manufacturers[5]._id },
      { name: 'Camaro', manufacturer: manufacturers[5]._id },
      { name: 'Equinox', manufacturer: manufacturers[5]._id },
      { name: 'Traverse', manufacturer: manufacturers[5]._id },
    
      // Hyundai
      { name: 'Elantra', manufacturer: manufacturers[6]._id },
      { name: 'Sonata', manufacturer: manufacturers[6]._id },
      { name: 'Tucson', manufacturer: manufacturers[6]._id },
      { name: 'Santa Fe', manufacturer: manufacturers[6]._id },
    
      // Kia
      { name: 'Sportage', manufacturer: manufacturers[7]._id },
      { name: 'Sorento', manufacturer: manufacturers[7]._id },
      { name: 'K5', manufacturer: manufacturers[7]._id },
      { name: 'Telluride', manufacturer: manufacturers[7]._id },
    
      // Nissan
      { name: 'Altima', manufacturer: manufacturers[8]._id },
      { name: 'Rogue', manufacturer: manufacturers[8]._id },
      { name: 'Pathfinder', manufacturer: manufacturers[8]._id },
      { name: 'Sentra', manufacturer: manufacturers[8]._id },
    
      // Volkswagen
      { name: 'Golf', manufacturer: manufacturers[9]._id },
      { name: 'Passat', manufacturer: manufacturers[9]._id },
      { name: 'Tiguan', manufacturer: manufacturers[9]._id },
      { name: 'Jetta', manufacturer: manufacturers[9]._id },
    
      // Tesla
      { name: 'Model 3', manufacturer: manufacturers[13]._id },
      { name: 'Model S', manufacturer: manufacturers[13]._id },
      { name: 'Model X', manufacturer: manufacturers[13]._id },
      { name: 'Model Y', manufacturer: manufacturers[13]._id },
    ]);
    
    console.log('Models seeded:', models);

    // Seed years (shared between multiple models)
    const years = await Year.insertMany([
      { year: 2018, models: [models[0]._id, models[10]._id, models[20]._id] },
      { year: 2019, models: [models[1]._id, models[11]._id, models[21]._id] },
      { year: 2020, models: [models[2]._id, models[12]._id, models[22]._id] },
      { year: 2021, models: [models[3]._id, models[13]._id, models[23]._id] },
      { year: 2022, models: [models[4]._id, models[14]._id, models[24]._id] },
      { year: 2023, models: [models[5]._id, models[15]._id, models[25]._id] },
      { year: 2015, models: [models[6]._id, models[16]._id, models[26]._id] },
      { year: 2016, models: [models[7]._id, models[17]._id, models[27]._id] },
      { year: 2017, models: [models[8]._id, models[18]._id, models[28]._id] },
      { year: 2019, models: [models[9]._id, models[19]._id, models[29]._id] },
      { year: 2024, models: [models[30]._id, models[31]._id, models[32]._id] },
      { year: 2025, models: [models[33]._id, models[34]._id, models[35]._id] },
      { year: 2026, models: [models[36]._id, models[37]._id, models[38]._id] },
      { year: 2027, models: [models[39]._id, models[40]._id, models[41]._id] },
    ]);

    console.log('Years seeded:', years);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

// Run the seed script
const runSeed = async () => {
  await connectDB();
  await seedData();
};

runSeed();
