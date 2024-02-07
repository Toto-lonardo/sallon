import { Sono } from "next/font/google";

const sono = Sono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-sono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sono.variable}>
      <body>{children}</body>
    </html>
  );
}
