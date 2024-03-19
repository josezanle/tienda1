import { Inter } from "next/font/google";
import { StoreProvider } from "./store/storeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tu Tienda",
  description: "",
};


function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}

export default RootLayout;
