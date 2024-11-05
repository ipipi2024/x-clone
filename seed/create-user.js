import mongoose from 'mongoose';
import User from '../src/lib/models/user.model.js'; // Adjust the path to your User model
import dotenv from 'dotenv';
dotenv.config({ path: '../.env.local' });



console.log("MONGO_URI", process.env.MONGODB_URI);
// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

// Seed data
const seedUsers = async () => {
  try {

    const user = new User({
      clerkId: 'sampleClerkId12324',
      email: 'sampleuser@example.com',
      firstName: 'Sample',
      lastName: 'User',
      username: 'sampleuser',
      avatar: 'https://example.com/avatar.png', // Replace with an actual avatar URL
      followers: [],
      following: [],
    });

    await user.save();
    console.log('User seeded successfully');
  } catch (error) {
    console.error('Error seeding user:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
const runSeeder = async () => {
  await connectDB();
  await seedUsers();
};

runSeeder();
