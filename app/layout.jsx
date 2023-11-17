import "../styles/globals.css";
import { Lato, Dancing_Script, La_Belle_Aurore, Kalam } from "next/font/google";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

const la_belle_aurore = La_Belle_Aurore({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-la-belle-aurore",
  weight: "400",
});

const kalam = Kalam({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lavishly-yours",
  weight: "400",
});

// const metadata = {
//   title: "Sexual Purity",
//   description: "Sexual Purity",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${lato.variable} ${dancing_script.variable} ${kalam.variable} ${la_belle_aurore.variable}`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
