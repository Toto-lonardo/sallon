import "../styles/globals.css";
import {Sono} from '@next/font/google'


const sono= Sono({
  variable: '--font-sono',
  subsets: ['latin'],
})
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={sono.variable}>
      <Component {...pageProps} />
    </main>
  );
}
