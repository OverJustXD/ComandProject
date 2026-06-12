import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  
  const [users, setUsers] = useState<any[]>([
    { email: 'admin@space.ua', password: '123', name: 'Ретро Читач', status: 'Книжковий Гік' }
  ]);

  const login = (email: string, pass: string) => {
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, pass: string) => {
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return false;
    
    const newUser = { name, email, password: pass, status: 'Новачок_ОС' };
    setUsers([...users, newUser]);
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);