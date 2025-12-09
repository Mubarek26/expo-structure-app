import { useCallback, useState } from 'react';
import { authService } from '@/services/auth.service';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      await authService.login({ email, password });
      setIsAuthenticated(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    isAuthenticated,
    loading,
    login,
  };
};
