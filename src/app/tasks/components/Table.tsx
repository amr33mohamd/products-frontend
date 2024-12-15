"use client";

import { useReactTable, ColumnDef, getCoreRowModel } from "@tanstack/react-table";
import { Task } from "../../types/task";

interface TableProps {
  data: Task[];
}

export function Table({ data }: TableProps) {
  const columns: ColumnDef<Task>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "status", header: "Status" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100 text-gray-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left font-semibold text-sm uppercase tracking-wider border-b"
                >
                  {header.isPlaceholder ? null : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-gray-800">
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={`${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-all`}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 border-b text-sm font-medium"
                >
                  {cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
