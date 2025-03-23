export interface Product {
    id: number;
    title: string;
    price: string;
    image_url: string;
    created_at?: string;
    updated_at?: string;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    current_page: number;
    last_page: number;
    total: number;
  }
  