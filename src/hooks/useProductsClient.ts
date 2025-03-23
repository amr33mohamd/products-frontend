import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse, Product } from "@/types/product";
import { useProducts } from "./useProducts";

// Takes a page number and initial data as arguments
export function useProductsClient(page: number, initialData: PaginatedResponse<Product>) {
    // Use the useQuery hook from react-query to fetch products data
    return useQuery({
        queryKey: ["products", page], // Unique key for the query, includes the page number
        queryFn: () => useProducts(page), // Function to fetch products data
        initialData, // Initial data to be used before the query is resolved
        refetchInterval: 30000, // Automatically refetch data every 30 seconds
    });
}
