# Frontend ReadMe

## Project Overview

This is a frontend application built with **Next.js 13** using the `app` directory. It fetches paginated task data from a backend API and displays it in a responsive, styled table. The application leverages **@tanstack/react-table** for table rendering and **Tailwind CSS** for styling.

## Features

- Server-side rendering of paginated tasks.
- Responsive table with hover effects and alternate row colors.
- Pagination with `Previous` and `Next` buttons.
- Styled using Tailwind CSS.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 16 or above)
- **npm** or **yarn**
- Backend API URL for fetching data

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add the backend API URL:

   ```env
   NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000/tasks
   ```

## Folder Structure

```
src/
├── app/
│   ├── tasks/
│   │   ├── page.tsx             # Tasks Page
│   │   ├── components/
│   │   │   ├── Table.tsx        # Table Component
│   │   │   └── Pagination.tsx   # Pagination Component
├── hooks/
│       └── useTasks.ts          # Server-Side Hook for Tasks
├── types/
│   └── task.ts                  # TypeScript Types
```

## Components

### 1. **Table**

Renders a responsive, styled table using **@tanstack/react-table**.

- Located at: `src/app/tasks/components/Table.tsx`

### 2. **Pagination**

Provides `Previous` and `Next` buttons for navigating paginated data.

- Located at: `src/app/tasks/components/Pagination.tsx`

## Custom Hook

### **useTasks**

A server-side hook to fetch paginated tasks from the backend API.

- Located at: `src/hooks/server/useTasks.ts`

## Styling

The application uses **Tailwind CSS** for styling. The table features hover effects, alternating row colors, and responsive designs. Pagination buttons are styled for clarity and usability.

## Environment Variables

The application requires the following environment variable:

- **NEXT\_PUBLIC\_API\_URL**: The base URL of the backend API.

Add this variable to your `.env.local` file in the root directory.

## Deployment

1. Build the application:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **Next.js**
- **@tanstack/react-table**
- **Tailwind CSS**

