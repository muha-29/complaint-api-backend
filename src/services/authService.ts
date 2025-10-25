import api from './api';
import * as SecureStore from 'react-native-secure-store';
import { User } from '../store/types';

class AuthService {
  async login(email: string, password: string) {
    const response = await api.post('/auth/login', { email, password });
    await SecureStore.setItem('authToken', response.data.token);
    return response.data;
  }

  async register(userData: Partial<User> & { password: string }) {
    const response = await api.post('/auth/register', userData);
    await SecureStore.setItem('authToken', response.data.token);
    return response.data;
  }

  async logout() {
    await SecureStore.removeItem('authToken');
  }

  async verifyToken() {
    const response = await api.get('/auth/verify');
    return response.data;
  }
}

export default new AuthService();
