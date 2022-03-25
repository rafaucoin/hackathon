import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function Splash() {
  return (
    <Flex height="100vh" display="flex" flexDirection="column" p={0}>
      <ColorModeSwitcher />
      <Box height="60vh" bg="green.200"></Box>
      <VStack h="50vh" justifyContent="space-around">
        <VStack align="center" width="100%">
          <Heading fontSize="lg">You want to track your health ?</Heading>
          <Text>In love with Chakra</Text>
        </VStack>
        <VStack p={6}>
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log In</Button>
        </VStack>
      </VStack>
    </Flex>
  );
}
