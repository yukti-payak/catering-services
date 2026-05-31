import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catering Services",
  description: "Find the best caterers near you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
       
        <div className="flex-grow w-full">
          {children}
        </div>
       
        <Footer />
      </body>
    </html>
  );
}