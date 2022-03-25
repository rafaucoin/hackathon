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
} from '@chakra-ui/react';
import React from 'react';
import { GrAdd } from 'react-icons/gr';

function Vaccination() {
  return (
    <VStack>
      <HStack width="100%" justifyContent="space-between">
        <Heading size="lg">Vaccination</Heading>
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
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isDate>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>

          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
          </Tr>
        </Tbody>
      </Table>
    </VStack>
  );
}

export default Vaccination;
