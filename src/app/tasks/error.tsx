"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service (optional)
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">An Error Occurred</h1>
      <p className="mb-4 text-gray-700">{error.message || "Something went wrong. Please try again."}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Retry
      </button>
    </div>
  );
}
