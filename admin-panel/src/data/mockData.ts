// Mock data for the admin panel demo

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  avatar?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive';
  image: string;
  description?: string;
}

export interface Order {
  id: number;
  orderNumber: string;
  customer: string;
  email: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  items: number;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    role: 'Admin',
    status: 'active',
    joinDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 234 567 8901',
    role: 'User',
    status: 'active',
    joinDate: '2023-02-20',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '+1 234 567 8902',
    role: 'Editor',
    status: 'inactive',
    joinDate: '2023-03-10',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    phone: '+1 234 567 8903',
    role: 'User',
    status: 'active',
    joinDate: '2023-04-05',
  },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 99.99,
    stock: 150,
    status: 'active',
    image: 'https://via.placeholder.com/64',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 299.99,
    stock: 75,
    status: 'active',
    image: 'https://via.placeholder.com/64',
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 24.99,
    stock: 200,
    status: 'active',
    image: 'https://via.placeholder.com/64',
  },
  {
    id: 4,
    name: 'Coffee Mug',
    category: 'Home',
    price: 12.99,
    stock: 0,
    status: 'inactive',
    image: 'https://via.placeholder.com/64',
  },
];

export const mockOrders: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-001',
    customer: 'John Doe',
    email: 'john.doe@example.com',
    total: 299.97,
    status: 'delivered',
    date: '2024-01-15',
    items: 3,
  },
  {
    id: 2,
    orderNumber: 'ORD-002',
    customer: 'Jane Smith',
    email: 'jane.smith@example.com',
    total: 149.99,
    status: 'shipped',
    date: '2024-01-16',
    items: 2,
  },
  {
    id: 3,
    orderNumber: 'ORD-003',
    customer: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    total: 89.99,
    status: 'processing',
    date: '2024-01-17',
    items: 1,
  },
  {
    id: 4,
    orderNumber: 'ORD-004',
    customer: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    total: 199.98,
    status: 'pending',
    date: '2024-01-18',
    items: 2,
  },
];