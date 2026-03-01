import "./globals.css";

export const metadata = {
  title: "Yousef Laurence Abayan",
  description: "My portfolio website",
  icons: { icon: "/images/favicon.png" }
};

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
