import { apiClient } from './api';

type AuthPayload = {
  email: string;
  password: string;
};

export const authService = {
  async login(payload: AuthPayload) {
    return apiClient('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },
};
