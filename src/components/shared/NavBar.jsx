import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
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

      <Menu>
        <MenuButton
          display="flex"
          justifyContent="center"
          as={IconButton}
          fontSize={35}
          variant="unstyled"
          icon={<BiDotsHorizontalRounded />}
        ></MenuButton>
        <MenuList>
          <MenuItem>Profile Settings</MenuItem>

          <MenuItem>Add Doctors</MenuItem>
          <MenuItem>Add Clinics</MenuItem>
          <MenuItem>Doctors List</MenuItem>
          <MenuItem>Clinics list</MenuItem>
          <MenuItem>Messages</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default NavBar;
