import { Sono } from "next/font/google";
import "../styles/globals.css";

const sono = Sono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
