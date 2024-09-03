import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Engineer's Day",
  description: "Engineer's Day registration website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
