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
import SignUp from './components/signup';

function App() {
  
  return (
    <SignUp/>
  );
}

export default App;
