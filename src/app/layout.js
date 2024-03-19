import { Lato } from "next/font/google";
import { StoreProvider } from "./store/storeProvider";
import "./globals.css";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700","900"]
});

export const metadata = {
  title: "Tu Tienda",
  description: "",
};


function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={lato.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}

export default RootLayout;
