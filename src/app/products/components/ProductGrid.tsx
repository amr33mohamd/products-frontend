import { Product } from "@/types/product"; // Import the Product type
import { ProductCard } from "./ProductCard"; // Import the ProductCard component

// Define the props for the ProductGrid component
interface ProductGridProps {
    data: Product[]; // An array of Product objects
}

// Define and export the ProductGrid component
export function ProductGrid({ data }: ProductGridProps) {
    return (
        // Create a responsive grid layout with a gap between items
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Map over the data array and render a ProductCard for each product */}
            {data.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
