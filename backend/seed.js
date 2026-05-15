import mongoose from "mongoose";
import dotenv from "dotenv";
import Caterer from "./models/Caterer.js";

dotenv.config();

const dummyData = [
  {
    name: "Royal Feast Caterers.",
    location: "Andheri West, Mumbai",
    pricePerPlate: 450,
    cuisines: ["North Indian", "Chinese", "Continental"],
    rating: 4.5,
  },
  {
    name: "Spice Route Events.",
    location: "Bandra East, Mumbai",
    pricePerPlate: 850,
    cuisines: ["Mughlai", "Awadhi", "Italian"],
    rating: 4.8,
  },
  {
    name: "The Green Plate",
    location: "Juhu, Mumbai",
    pricePerPlate: 350,
    cuisines: ["Gujarati", "South Indian"],
    rating: 4.2,
  },
  {
    name: "Coastal Delights",
    location: "Worli, Mumbai",
    pricePerPlate: 600,
    cuisines: ["Malvani", "Goan"],
    rating: 4.0,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");
    await Caterer.deleteMany({});
    console.log("Old data cleared.");
    await Caterer.insertMany(dummyData);
    console.log("Database Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedDB();
