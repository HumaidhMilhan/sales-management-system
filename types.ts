export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'low_stock';
  batchNumber?: string;
}

export interface Salesman {
  id: string;
  name: string;
  username: string;
  phone: string;
  avatar: string;
  status: 'active' | 'inactive';
  totalSales: number;
}

export interface SaleItem {
  product: Product;
  quantity: number;
}

export interface Invoice {
  id: string;
  customerName: string;
  time: string;
  salesman: string;
  amount: number;
  status: 'paid' | 'pending' | 'refund';
  items: SaleItem[];
}

export interface ShopSettings {
  name: string;
  logo: string;
  themeColor: string;
}
