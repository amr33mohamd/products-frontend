"use client";

import { ProductSlider } from "./ProductSlider";
import { ProductGrid } from "./ProductGrid";
import { ProductPagination } from "./ProductPagination";
import { useProductsClient } from "@/hooks/useProductsClient";
import { PaginatedResponse, Product } from "@/types/product";

interface ProductsClientProps {
    initialData: PaginatedResponse<Product>;
    page: number;
}

// ProductsClient component to display products with pagination
export function ProductsClient({ initialData, page }: ProductsClientProps) {
    // Fetch products data using custom hook
    const { data: productsData, isLoading, isError } = useProductsClient(page, initialData);

    // Show loading state
    if (isLoading) return <div className="text-center">Loading products...</div>;
    // Show error state
    if (isError) return <div className="text-center text-red-500">Failed to load products.</div>;

    return (
        <div>
            {/* Display product slider */}
            <ProductSlider products={productsData.data} />

            <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">Our Products</h1>

            {/* Display product grid */}
            <ProductGrid data={productsData.data} />

            {/* Display pagination controls */}
            <ProductPagination
                currentPage={productsData.current_page}
                lastPage={productsData.last_page}
            />
        </div>
    );
}
