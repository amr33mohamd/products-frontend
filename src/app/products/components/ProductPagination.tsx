interface ProductPaginationProps {
    currentPage: number; // The current active page number
    lastPage: number; // The last page number
}

export function ProductPagination({ currentPage, lastPage }: ProductPaginationProps) {
    return (
        <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: lastPage }, (_, index) => (
                <a
                    key={index + 1} 
                    href={`?page=${index + 1}`} // URL for the page link
                    className={`px-4 py-2 rounded-full border ${
                        currentPage === index + 1
                            ? "bg-blue-500 text-white" // Active page styling
                            : "bg-white text-gray-700 hover:bg-gray-100" // Inactive page styling
                    }`}
                >
                    {index + 1}
                </a>
            ))}
        </div>
    );
}
