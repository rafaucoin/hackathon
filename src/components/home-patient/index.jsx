import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../shared/NavBar';
import Chart from './Chart';
import Profile from './Profile';
import Vaccination from './Vaccination';

const Patient = () => {
  return (
    <Container
      position="relative"
      border="2px solid"
      borderColor="gray.200"
      display="flex"
      flexDirection="column"
      my={3}
      gap={5}
      mb="7vh"
      borderRadius="xl"
    >
      <Profile />
      <Flex flexDirection="column" mt="5%" height="25vh">
        <Chart indicator="Temperature" />
      </Flex>
      <Vaccination />
      <Flex flexDirection="column" mt="5%" height="25vh">
        <Chart indicator="Blood glucose" />
      </Flex>
      <NavBar />
    </Container>
  );
};

export default Patient;
