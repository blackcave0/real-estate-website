"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import UserTypes, { Register } from "@/app/types/UserTypes";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "../hooks/use-toast";
import { useLocalStorage } from "@/app/hooks/use-local-storage";

type AuthContextType = {
  user: UserTypes | null;
  login: (email: string, password: string) => void;
  register: (registerData: Register) => void;
  logout: () => void;
  getCurrentUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserTypes | null>(null);
  const router = useRouter();
  const toast = useToast();
  const [setItem, getItem, removeItem] = useLocalStorage();

  const getCurrentUser = async () => {
    try {
      const token = getItem("token");
      console.log('Stored token:', token); // Debug log

      if (!token) {
        console.log('No token found'); // Debug log
        return;
      }

      // Set authorization header explicitly for this request
      const response = await axios.get('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('getCurrentUser response:', response.data); // Debug log
      setUser(response.data.user);
    } catch (error) {
      console.error('getCurrentUser error:', error); // Debug log
      removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      router.push('/login');
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      // Set default axios header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getCurrentUser();
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { user, token } = response.data;
      console.log('Login response:', { user, token, debug: response.data.debug }); // Debug log

      setUser(user);
      setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      router.push('/profile');

      return response;
    } catch (error) {
      toast.toast({ content: 'Invalid credentials', type: 'foreground' });
      throw error;
    }
  }

  const register = async (registerData: Register) => {
    try {
      const response = await axios.post('/api/auth/register', registerData);

      const { user, token } = response.data
      setUser(user);
      setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      router.push('/login');
    } catch (error) {
      toast.toast({ content: 'Faild to register', type: 'foreground' });
    }
  }

  const logout = async () => {
    try {
      // await axios.post('/api/auth/logout');
      setUser(null);
      removeItem('token');
      delete axios.defaults.headers.common['Authorization']
      router.push('/');
    } catch (error) {
      toast.toast({ content: "Failed to logout", type: 'foreground' })
    }
  }


  return (
    <AuthContext.Provider value={{ user, login, register, logout, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );

};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
