"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  total: number;
}

export function Pagination({ currentPage, lastPage }: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-4 space-y-2 flex-wrap">
      {/* Previous Button */}
      <Link
        href={`?page=${currentPage - 1}`}
        className={`px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 transition ${
          currentPage === 1 && "opacity-50 pointer-events-none"
        }`}
      >
        Previous
      </Link>

      {/* Page Information */}
      <div className="text-sm font-medium text-gray-700">
        Page {currentPage} of {lastPage}
      </div>

      {/* Next Button */}
      <Link
        href={`?page=${currentPage + 1}`}
        className={`px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 transition ${
          currentPage === lastPage && "opacity-50 pointer-events-none"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
