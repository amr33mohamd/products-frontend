import { PaginatedResponse } from "../types/task";

// Server-side hook for fetching tasks
export async function useTasks(page: number): Promise<PaginatedResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tasks?page=${page}`,
    {
      next: { revalidate: 60 }, //  caching: revalidates every 60 seconds
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch tasks: ${res.statusText}`);
  }

  return res.json();
}
