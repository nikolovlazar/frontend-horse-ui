import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/josefin-sans/700.css';

import theme from '../src/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
