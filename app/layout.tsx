import { Sono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import { Providers } from '../components/providers.js'

const sono = Sono({
  subsets: ["latin"],
  display: "swap",
  variable: "--custom-font-sono",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sono.className}>
      <body className="bg-sfondo">
        <Providers>
        <Header />
        <div className="mt-32">
        {children}
        </div>
        </Providers>
      </body>
    </html>
  );
}
