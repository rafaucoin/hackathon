import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import SignUp from './components/signup';
import Step from './components/signup/steptwo';
import Last from './components/signup/stepthree';
import Splash from './components/splash';
import Patient from './components/home-patient';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <Container px={2}>
      <Patient />;
    </Container>
  );
}

export default App;
