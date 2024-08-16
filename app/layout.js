import { Inter } from "next/font/google";
import "./output.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muharriana | Portfolio",
  description: "Personala portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <div className="bg-slate-50">
          <Footer />
        </div>
      </body>
    </html>
  );
}
