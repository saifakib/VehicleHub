const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Import models
const { Manufacturer, Model: CarModel, Year } = require("./src/model");

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectionURL);
    console.log("Database Connected!!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedDataFromExternal = async () => {
  try {
    const API_URL =
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records";
    const LIMIT = 100;
    const TOTAL_COUNT = 10000; // expected: 47523(paid);
    let offset = 0;
    let requestCount = 0;

    // Clear existing data
    await Manufacturer.deleteMany({});
    await CarModel.deleteMany({});
    await Year.deleteMany({});

    console.log("Existing data cleared!");

    while (offset < TOTAL_COUNT) {
      if (requestCount >= 100) {
        console.log("Reached 100 requests, pausing for 30 seconds...");
        await new Promise((resolve) => setTimeout(resolve, 30000));
        requestCount = 0; // Reset the request count after the pause
      }

      console.log(`Fetching data from offset ${offset}`);
      const response = await fetch(
        `${API_URL}?select=make,model,drive,vclass,year&limit=${LIMIT}&offset=${offset}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();
      const results = data.results;

      for (const record of results) {
        const { make, model, vclass, year } = record;

        // Find or create manufacturer
        let manufacturer = await Manufacturer.findOne({ name: make });
        if (!manufacturer) {
          manufacturer = await Manufacturer.create({ name: make });
        }

        // Find or create model
        let carModel = await CarModel.findOne({
          name: model,
          manufacturer: manufacturer._id,
        });
        if (!carModel) {
          carModel = await CarModel.create({
            name: model,
            vclass,
            manufacturer: manufacturer._id,
          });
        }

        // Find or create year
        let yearEntry = await Year.findOne({ year });
        if (!yearEntry) {
          yearEntry = await Year.create({ year, models: [] });
        }

        // Add model to year if not already added
        if (!yearEntry.models.includes(carModel._id)) {
          yearEntry.models.push(carModel._id);
          await yearEntry.save();
        }
      }

      offset += LIMIT;
      requestCount++;
    }

    console.log("Data fetching and insertion completed.");
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};

// Run the seed script
const runSeed = async () => {
  await connectDB();
  await seedDataFromExternal();
};

runSeed();
