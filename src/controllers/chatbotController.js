// src/controllers/chatbotController.js
const Complaint = require('../models/complaint');

exports.getComplaintStatus = async (req, res) => {
  const { complaintId } = req.query;

  if (!complaintId) {
    return res.status(400).json({ error: 'complaintId query param required' });
  }

  try {
    const complaint = await Complaint.findById(complaintId).select('status');
    if (!complaint) {
      return res.status(404).json({ error: 'Complaint not found' });
    }
    res.json({ complaintId, status: complaint.status });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};