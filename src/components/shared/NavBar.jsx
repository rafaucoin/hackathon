import { HStack, IconButton } from '@chakra-ui/react';
import React from 'react';
import {
  BiHome,
  BiMessageSquare,
  BiSearch,
  BiDotsHorizontalRounded,
} from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';

function NavBar() {
  return (
    <HStack
      justify="space-around"
      position="fixed"
      bottom="0"
      left="0"
      height="10vh"
      width="100%"
      bg="white"
    >
      <IconButton variant="unstyled" fontSize={35} icon={<BiHome />} />
      <IconButton variant="unstyled" fontSize={35} icon={<GrAdd />} />
      <IconButton variant="unstyled" fontSize={35} icon={<BiMessageSquare />} />
      <IconButton variant="unstyled" fontSize={35} icon={<BiSearch />} />
      <IconButton
        variant="unstyled"
        fontSize={35}
        icon={<BiDotsHorizontalRounded />}
      />
    </HStack>
  );
}

export default NavBar;
