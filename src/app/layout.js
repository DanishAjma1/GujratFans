import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "./context/CartContext";
import FloatingCartButton from "./FloatingCartButton";
import { ToastContainer } from "react-toastify";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gujrat Fans",
  description: "Fans and Motors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
  <Navbar />
  <ToastContainer />
  {children}
    <FloatingCartButton />
  <Footer />
</CartProvider>
      </body>
    </html>
  );
}
