export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
  }
  
  export interface PaginatedResponse {
    data: Task[];
    current_page: number;
    last_page: number;
    total: number;
  }
  