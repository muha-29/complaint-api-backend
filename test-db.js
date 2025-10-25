// test-db.js
require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('./src/config/db');
const Complaint = require('./src/models/complaint');

(async () => {
  try {
    // 1️⃣ Connect
    await connectDB();
    console.log('✅ MongoDB connected');

    // 2️⃣ Verify the Complaint model can talk to the DB
    const sample = new Complaint({
      title: 'Test pothole',
      description: 'Big hole near the park',
      location: {
        type: 'Point',
        coordinates: [-122.4324, 37.78826] // [lng, lat]
      },
      photos: [] // empty for the test
    });

    await sample.save();
    console.log('✅ Sample complaint inserted (ID:', sample._id, ')');

    // 3️⃣ Clean up – remove the test doc
    await Complaint.deleteOne({ _id: sample._id });
    console.log('✅ Test document removed');

    // 4️⃣ Optional: list collections to prove the schema exists
    const collections = await mongoose.connection.db.listCollections().toArray();
    const hasComplaints = collections.some(c => c.name === 'complaints');
    console.log(`✅ Does 'complaints' collection exist? ${hasComplaints ? 'Yes' : 'No'}`);

    mongoose.disconnect();
    console.log('✅ Disconnected');

  } catch (err) {
    console.error('❌ Something went wrong:', err);
    process.exit(1);
  }
})();