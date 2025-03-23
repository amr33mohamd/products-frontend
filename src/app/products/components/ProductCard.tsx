import { Product } from "@/types/product";

// Define the props for the ProductCard component
interface ProductCardProps {
    product: Product;
}

// ProductCard component to display product details
export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all flex flex-col">
            <div className="relative mb-4">
                {/* Product image */}
                <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-48 object-contain rounded-lg"
                />
            </div>

            {/* Product title */}
            <h2 className="text-md font-semibold text-gray-800 mb-1 line-clamp-2">{product.title}</h2>

            {/* Product price */}
            <p className="text-xl font-bold text-blue-600 mb-4">${product.price}</p>

            {/* Add to Cart button */}
            <button className="mt-auto bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                Add to Cart
            </button>
        </div>
    );
}
