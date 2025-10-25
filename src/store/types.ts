export interface User {
  id: string;
  email: string;
  name: string;
  phoneNumber?: string;
  role: 'citizen' | 'admin';
  avatar?: string;
}

export interface Complaint {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  attachments: string[];
  location?: {
    latitude: number;
    longitude: number;
    address: string;
  };
  createdAt: string;
  updatedAt: string;
  assignedAdmin?: string;
  resolution?: string;
}

export interface AppState {
  auth: {
    user: User | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
  };
  complaints: {
    list: Complaint[];
    selectedComplaint: Complaint | null;
    loading: boolean;
    error: string | null;
  };
}
