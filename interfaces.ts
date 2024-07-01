export interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  category: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}
