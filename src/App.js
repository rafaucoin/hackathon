import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  // useEffect(() => {}, []);

  const add = async e => {
    e.preventDefault();
    console.log('done');

    const response = await axios.post(' http://localhost:3000/products', {
      request: data,
    });
    console.log(response);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <form onSubmit={add}>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input onChange={e => setData(e.target.value)} />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Button>submit</Button>
            </form>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
