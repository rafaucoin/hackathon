import {
  Avatar,
  Badge,
  Box,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <HStack height="10vh" mt={2} gap={6}>
      <Box height="10vh" width="10vh">
        <Avatar height="100%" width="100%" />
      </Box>
      <VStack height="90%" width="55%">
        <Heading alignSelf="flex-start" size="lg">
          Rafik Daouha
        </Heading>
        <Divider />
        <HStack width="100%" justify="space-between">
          <Badge>Male</Badge>
          <Badge>Age:21</Badge>
          <Badge>1m79</Badge>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Profile;
