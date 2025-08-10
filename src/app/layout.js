import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Kaizer",
  description: "Kaizer's Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-1`}>{children}</body>
      <GoogleAnalytics gaId="G-8L41G49WPR" />
    </html>
  );
}
