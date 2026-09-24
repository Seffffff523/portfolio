import "./globals.css";

export const metadata = {
  title: "Yousef Laurence Abayan",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="garden">
      <head>
        {/* Applies the saved theme before first paint so dark mode survives a reload. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",d?"night":"garden")}catch(e){}})()`,
          }}
        />
      </head>
      <body className=" transition-colors duration-500">

        {children}
      </body>
    </html>
  );
}
