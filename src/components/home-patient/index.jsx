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
      mb="13vh"
      borderRadius="xl"
    >
      <Profile />
      <Flex flexDirection="column" mt="5%" height="25vh">
        <Chart indicator="Temperature" donne={[600,712,790,641,750,810,830,890,820,740,660,610]} />
      </Flex>
      <Vaccination />
      <Flex flexDirection="column" mt="5%" height="25vh">
        <Chart indicator="Blood glucose" donne={[200,262,490,541,650,620,690,730,890,940,960,1010]}/>
      </Flex>
      <Flex flexDirection="column" mt="5%" height="25vh">
        <Chart indicator="Blood Pressure" donne={[600,712,790,641,750,810,830,890,820,740,660,610]}/>
      </Flex>
      <NavBar />
    </Container>
  );
};

export default Patient;
