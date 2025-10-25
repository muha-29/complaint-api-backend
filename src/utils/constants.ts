export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.yourserver.com';
export const API_TIMEOUT = parseInt(process.env.REACT_APP_API_TIMEOUT || '15000', 10);

export const COMPLAINT_STATUS = {
  OPEN: 'open',
  IN_PROGRESS: 'in_progress',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
} as const;

export const COMPLAINT_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical',
} as const;

export const COMPLAINT_CATEGORIES = [
  'Infrastructure',
  'Sanitation',
  'Water',
  'Electricity',
  'Roads',
  'Public Safety',
  'Other',
] as const;

export const USER_ROLES = {
  CITIZEN: 'citizen',
  ADMIN: 'admin',
} as const;

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 6,
  PHONE_REGEX: /^[0-9]{10,15}$/,
  NAME_MIN_LENGTH: 3,
} as const;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNAUTHORIZED: 'Session expired. Please login again.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  PERMISSION_DENIED: 'Permission denied.',
  UNKNOWN_ERROR: 'An unexpected error occurred.',
  VALIDATION_ERROR: 'Please fill all required fields.',
} as const;

export const SUCCESS_MESSAGES = {
  COMPLAINT_CREATED: 'Complaint registered successfully!',
  COMPLAINT_UPDATED: 'Complaint updated successfully!',
  LOGIN_SUCCESS: 'Logged in successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
} as const;
