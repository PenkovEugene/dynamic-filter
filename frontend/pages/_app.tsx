import '@/styles/globals.scss';
import './custom.scss';
import "../components/Flat/flat.scss"
import "../components/FiltersPopup/filtersPopup.scss"
import "../components/MainFilters/mainFilters.scss"
import type { AppProps } from 'next/app';

const App = ({
  Component,
  pageProps,
}: AppProps) => (

  <Component {...pageProps} />
);

export default App;
