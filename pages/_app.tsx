import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query';

//create client
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
  )
}
export default App;
