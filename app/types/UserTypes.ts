interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}


export interface Register {
  name: string;
  email: string;
  password: string;
  phone: number;
  role: 'user' | 'admin';
}


export default UserType