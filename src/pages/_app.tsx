import '@styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../fonts/PretendardLight.woff2',
      weight: '300',
    },
    {
      path: '../fonts/PretendardRegular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/PretendardMedium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/PretendardBold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pretendard.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
