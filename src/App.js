import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Step from './components/signup/steptwo';
import Last from './components/signup/stepthree';
import DocCard from './components/cards/DocCard';
import { Container, Flex } from '@chakra-ui/react';
import SignUp from './components/signup';
import FirstPage from './components/firstpage/FirstPage';
import Log from './components/firstpage/Log';
import Landing from './components/landing';
import Login from './components/Login';
import Doctors from './components/cards';
import Patient from './components/home-patient';
import ChooseProfile from './components/profile-choose';
function App() {
  return (
    <Router>
      <Container
        // display={{ base: 'flex', sm: 'none' }}
        flexDirection="column"
        p={0}
      >
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/getstarted" element={<Log />} />
          <Route path="/signup/0" element={<SignUp />} />

          <Route path="/signup/1" element={<ChooseProfile />} />
          <Route path="/signup/2" element={<Step />} />
          <Route path="/signup/3" element={<Last />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patient" element={<Patient />} />

          {/* <Route path="/doctor/patients" element={</>}/> */}
        </Routes>
      </Container>
      {/* <Flex w="100vw" display={{ base: 'none', sm: 'flex' }} p={0}>
        <Landing />
      </Flex> */}
    </Router>
  );
}

export default App;
