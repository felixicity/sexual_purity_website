import "../styles/globals.css";
// import { Lato } from "next/font/google";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["400", "700", "900"],
// });

// const dancing_Script = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["500", "700"],
// });

export const metadata = {
  title: "Sexual Purity",
  description: "Sexual Purity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="font-lato">
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
