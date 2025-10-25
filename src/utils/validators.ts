import { VALIDATION_RULES } from './constants';

export const validateEmail = (email: string): boolean => {
  return VALIDATION_RULES.EMAIL_REGEX.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= VALIDATION_RULES.PASSWORD_MIN_LENGTH;
};

export const validatePhoneNumber = (phone: string): boolean => {
  return VALIDATION_RULES.PHONE_REGEX.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= VALIDATION_RULES.NAME_MIN_LENGTH;
};

export const getEmailError = (email: string): string | null => {
  if (!email) return 'Email is required';
  if (!validateEmail(email)) return 'Invalid email format';
  return null;
};

export const getPasswordError = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (!validatePassword(password)) return 'Password must be at least 6 characters';
  return null;
};

export const getPhoneError = (phone: string): string | null => {
  if (!phone) return 'Phone number is required';
  if (!validatePhoneNumber(phone)) return 'Invalid phone number';
  return null;
};

export const getNameError = (name: string): string | null => {
  if (!name) return 'Name is required';
  if (!validateName(name)) return 'Name must be at least 3 characters';
  return null;
};
