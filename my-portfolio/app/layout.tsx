import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="garden">
      <body className=" transition-colors duration-500">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
