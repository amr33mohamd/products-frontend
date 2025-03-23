"use client";

// Importing necessary hooks and styles from Keen Slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Product } from "@/types/product";

// Defining the props interface for the ProductSlider component
interface ProductSliderProps {
    products: Product[];
}

export function ProductSlider({ products }: ProductSliderProps) {
    // Initializing the Keen Slider with specific options
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true, // Enables continuous looping of slides
        mode: "snap", // Sets the snapping mode for slides
        slides: { perView: 1 }, // Number of slides visible per view
        autoplay: true, // Enables autoplay for the slider
    });

    return (
        // Slider container with Keen Slider classes and styles
        <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden mb-10 shadow-lg">
            {/* Mapping through the products array to create individual slides */}
            {products.map((product) => (
                <div key={product.id} className="keen-slider__slide relative">
                    {/* Product image */}
                    <img
                        src={product.image_url}
                        alt={product.title}
                        className="w-full h-64 object-cover"
                    />
                    {/* Optional overlay with product title */}
                    <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-xl">
                        <h2 className="text-sm font-semibold text-gray-800">{product.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}
