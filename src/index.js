import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
