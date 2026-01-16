// import { Inter } from "next/font/google"; // Disabled due to build connectivity issues
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "SkilledHyre Labs | Engineering Digital Innovation",
  description:
    "SkilledHyre Labs is a full-fledged IT and AI engineering company delivering scalable software solutions, AI-powered platforms, and on-demand tech talent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col font-sans`}>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
