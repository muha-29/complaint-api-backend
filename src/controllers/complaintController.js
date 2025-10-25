// src/controllers/complaintController.js
const Complaint = require('../models/complaint');
const { uploadToCloud } = require('../services/uploadService');

// Helper – turn local file paths into public URLs (placeholder)
const mapMulterFilesToUrls = async (files) => {
  if (!files) return [];
  // In a real app you would upload to S3 / Cloudinary here.
  // For the hackathon we just return the original path.
  return files.map((f) => `/uploads/${f.filename}`);
};

/**
 * Create a new complaint
 */
exports.createComplaint = async (req, res) => {
  try {
    const { title, description, latitude, longitude } = req.body;
    const photoUrls = await mapMulterFilesToUrls(req.files);

    const complaint = new Complaint({
      title,
      description,
      photos: photoUrls,
      location: {
        type: 'Point',
        coordinates: [Number(longitude), Number(latitude)],
      },
    });

    await complaint.save();
    res.status(201).json({ message: 'Complaint created', complaint });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * Get a single complaint
 */
exports.getComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ error: 'Not found' });
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * List open complaints within a radius (driving mode)
 * Query params: lat, lng, radius (km)
 */
exports.listNearbyComplaints = async (req, res) => {
  try {
    const { lat, lng, radius = 5 } = req.query;
    const point = {
      type: 'Point',
      coordinates: [Number(lng), Number(lat)],
    };
    const complaints = await Complaint.find({
      location: {
        $nearSphere: {
          $geometry: point,
          $maxDistance: Number(radius) * 1000, // meters
        },
      },
      status: { $ne: 'Resolved' },
    }).limit(50);
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * Public feed – only resolved complaints
 */
exports.listPublicResolved = async (req, res) => {
  try {
    const resolved = await Complaint.find({ status: 'Resolved' })
      .select('-photos') // hide photos for public feed
      .limit(100);
    res.json(resolved);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * Admin: update complaint status
 */
exports.updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['Pending', 'In Progress', 'Resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!complaint) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Status updated', complaint });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.listAllComplaints = async (req, res) => {
  try {
    const all = await Complaint.find().limit(1000); // limit to avoid huge responses
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
