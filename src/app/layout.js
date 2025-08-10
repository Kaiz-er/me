import "./globals.css";

export const metadata = {
  title: "Kaizer",
  description: "Kaizer's Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-1`}>{children}</body>
    </html>
  );
}
