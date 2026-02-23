import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="garden">
      <body className=" transition-colors duration-500">
        
        {children}
      </body>
    </html>
  );
}
