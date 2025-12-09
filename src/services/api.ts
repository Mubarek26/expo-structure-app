const BASE_URL = 'https://example.com/api';

export const apiClient = async (path: string, options: RequestInit = {}) => {
  const response = await fetch(`${BASE_URL}${path}`, options);
  if (!response.ok) {
    throw new Error('Network error');
  }
  return response.json();
};
