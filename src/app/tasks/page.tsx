import { useTasks } from "../../hooks/useTasks";
import { Pagination } from "./components/Pagination";
import { Table } from "./components/Table";

export default async function TasksPage({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const page = parseInt(searchParams?.page || "1", 10);
  let tasksData;

  try {
    tasksData = await useTasks(page);
  } catch (error) {
    // Throw an error to trigger the error page
    throw new Error("Failed to load tasks. Please try again later.");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Tasks</h1>
      <Table data={tasksData.data} />
      <Pagination
        currentPage={tasksData.current_page}
        lastPage={tasksData.last_page}
        total={tasksData.total}
      />
    </div>
  );
}
