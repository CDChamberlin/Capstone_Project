import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Copyright from "components/Copyright";
import Navbar from "components/Navbar";
import { CartProvider } from "context/CartContext";
import { UserProvider } from "context/UserContext";



import { Inter } from "next/font/google";

import { ThemeProvider } from "@mui/material";
import theme from "context/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cat and Mouse Collectibles",
  description: "An e-commerce website concept designed for Cat and Mouse Collectibles",
  author: "Collin Chamberlin",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
        <UserProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Copyright sx={{ nt: 8, mb: 4 }} />
          </CartProvider>
        </UserProvider>
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
