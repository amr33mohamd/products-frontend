import { useProducts } from "../../hooks/useProducts"; 
import { ProductsClient } from "./components/ProductsClient"; 


export default async function ProductsPage({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    // Parse the page number from the search parameters, defaulting to 1 if not provided
    const page = parseInt(searchParams?.page || "1", 10);
    let productsData;

    try {
        // Attempt to fetch the products data using the custom hook
        productsData = await useProducts(page);
    } catch (error) {
        // Return an error message if the fetch fails
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-4">Failed to load products.</h1>
                <p>Please try again later.</p>
            </div>
        );
    }

    // Return the ProductsClient component with the fetched data and current page number
    return (
        <div className="container mx-auto p-6">
            <ProductsClient initialData={productsData} page={page} />
        </div>
    );
}
