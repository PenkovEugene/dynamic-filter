import '@/styles/globals.scss';
import './custom.scss';
import "../components/flat.scss"
import type { AppProps } from 'next/app';

const App = ({
  Component,
  pageProps,
}: AppProps) => (

  <Component {...pageProps} />
);

export default App;
