'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (_email: string, _password: string) => {
    // Dummy authentication logic
    const dummyUser: User = {
      id: '1',
      email: _email,
      name: 'John Doe'
    };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    setUser(dummyUser);
  };

  const register = async (name: string, email: string, _password: string) => {
    // Dummy registration logic
    const dummyUser: User = {
      id: '1',
      email,
      name
    };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    setUser(dummyUser);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 