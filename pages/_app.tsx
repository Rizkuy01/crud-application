import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query';
import { Store } from '../redux/store';
import { Provider } from 'react-redux';

//create client
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>
    <Provider store={Store}>
    <Component {...pageProps} />
    </Provider>
  </QueryClientProvider>
  )
}
export default App;
