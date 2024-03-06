import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Fake Store Proj",
  description: "A project for the Institute of Data Software Engineering Class",
  author: "Collin Chamberlin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <CartProvider>
          <Navbar />
          {children}
          <Copyright sx={{ nt: 8, mb: 4 }} />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
