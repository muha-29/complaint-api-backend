// seed-users.js
require('dotenv').config();
const { connectDB } = require('./src/config/db');
const User = require('./src/models/user');

const demoUsers = [
  { username: 'citizen1', password: 'password123', email: 'citizen1@demo.com', role: 'citizen' },
  { username: 'citizen2', password: 'password123', email: 'citizen2@demo.com', role: 'citizen' },
  { username: 'admin1', password: 'admin123', email: 'admin1@demo.com', role: 'admin' },
  { username: 'admin2', password: 'admin123', email: 'admin2@demo.com', role: 'admin' },
];

(async () => {
  try {
    await connectDB();
    
    // Clear existing users (optional)
    await User.deleteMany({});
    
    // Insert demo users
    for (const userData of demoUsers) {
      const user = new User(userData);
      await user.save();
      console.log(`✅ Created user: ${userData.username} (${userData.role})`);
    }
    
    console.log('🎉 Demo users seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
})();