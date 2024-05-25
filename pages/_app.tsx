import type { AppProps } from 'next/app'
import '../app/globals.css'
import { SnackbarProvider } from 'notistack'
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';
import Header from './Header';
import Footer from './Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TonConnectUIProvider
        manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
      >
      <SnackbarProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SnackbarProvider>
    </TonConnectUIProvider>
  );
}