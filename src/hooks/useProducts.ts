import { PaginatedResponse, Product } from "../types/product";

// Server-side function for fetching products
export async function useProducts(page: number): Promise<PaginatedResponse<Product>> {
    // Fetch products from the API with the specified page number
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}`,
        {
            // Auto revalidate the data every 30 seconds
            next: { revalidate: 30 },
        }
    );

    // Check if the response is not ok (status code is not in the range 200-299)
    if (!res.ok) {
        // Throw an error with the status text if the fetch failed
        throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    // Parse and return the JSON response
    return res.json();
}
