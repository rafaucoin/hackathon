import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';

const DocCard = () => {
  return (
    <>
      <Flex flexDirection="column" pt="10" px="6">
        <Container
          border="2px solid"
          borderColor="gray.200"
          borderRadius="2xl"
          h="23vh"
        >
          <Flex my="5" gap="4">
            <Avatar size="xl"></Avatar>
            {/* <Divider orientation='vertical'></Divider> */}
            <Flex flexDirection="column" gap="1.5" pt="2">
              <Heading fontSize="2xl">Sidali Sisaber</Heading>
              <Divider />
              <Flex justifyContent="space-between">
                <Text fontWeight="lg" fontSize="small" p="0">
                  Male
                </Text>
                <Text fontWeight="lg" fontSize="small" p="0">
                  Age:21
                </Text>
                <Text fontWeight="lg" fontSize="small" p="0">
                  1m79
                </Text>
              </Flex>
              <Text textAlign="center" fontWeight="lg" fontSize="small" p="0">
                Medcin cardiologue
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="center" gap="2">
            <Button colorScheme="red" p={2}>
              Delete Doctor
            </Button>
            <Button colorScheme="green">View Profile</Button>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default DocCard;
