import api from './api';
import { Complaint } from '../store/types';

class ComplaintService {
  async getComplaints(params: { userId?: string; status?: string } = {}) {
    const response = await api.get('/complaints', { params });
    return response.data;
  }

  async getComplaintById(id: string) {
    const response = await api.get(`/complaints/${id}`);
    return response.data;
  }

  async createComplaint(complaintData: Partial<Complaint>) {
    const response = await api.post('/complaints', complaintData);
    return response.data;
  }

  async updateComplaint(id: string, data: Partial<Complaint>) {
    const response = await api.put(`/complaints/${id}`, data);
    return response.data;
  }

  async updateComplaintStatus(
    id: string,
    status: string,
    resolution?: string
  ) {
    const response = await api.patch(`/complaints/${id}/status`, {
      status,
      resolution,
    });
    return response.data;
  }
}

export default new ComplaintService();
