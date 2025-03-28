import { Sono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import { Providers } from "../components/providers.js";
import Container from "../components/Container";
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
      <Providers>
        <Container>
          <Header />
          <div className="mt-32">{children}</div>
        </Container>
      </Providers>
    </html>
  );
}
