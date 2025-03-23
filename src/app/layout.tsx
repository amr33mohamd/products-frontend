import "./globals.css";
import { ReactQueryProvider } from "./components/ReactQueryProvider";

export const metadata = {
  title: "Products",
  description: "Product listing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
