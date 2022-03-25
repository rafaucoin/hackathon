import {
  Button,
  Heading,
  HStack,
  VStack,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  Tfoot,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { GrAdd } from 'react-icons/gr';

function Vaccination() {
  return (
    <VStack>
      <HStack width="100%" justifyContent="space-between">
        <Heading size="md">Vaccination</Heading>
        <Button
          display="flex"
          align="center"
          variant="unstyled"
          rightIcon={<GrAdd />}
          p={2}
        >
          Add Info
        </Button>
      </HStack>
      <HStack width="100%" justifyContent="space-between">
        <VStack>
          <Heading size="sm">Name</Heading>
          <Text alignSelf="flex-start">Flue</Text>
          <Text alignSelf="flex-start">Pfizer</Text>
          <Text alignSelf="flex-start">Flue</Text>
          <Text alignSelf="flex-start">Pfizer</Text>
        </VStack>
        <VStack>
          <Heading size="sm" alignSelf="flex-start">
            Date
          </Heading>
          <Text alignSelf="flex-start">06/09/2021</Text>
          <Text alignSelf="flex-start">06/09/2021</Text>
          <Text alignSelf="flex-start">06/09/2021</Text>
          <Text alignSelf="flex-start">06/09/2021</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Vaccination;
