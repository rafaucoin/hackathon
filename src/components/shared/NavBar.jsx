import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Heading,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import {
  BiHome,
  BiMessageSquare,
  BiSearch,
  BiDotsHorizontalRounded,
} from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import logo from '../../assets/logo.png';

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
export function LargeNav() {
  return (
    <HStack  position='initial'right= '0'
    left= '0'
    z-index= '1030' alignItems='center' boxShadow='lg' p={3} justifyContent='space-between' height='10vh' w='100%'>
     <Image width='12%' src={logo}/>
     <HStack gap='2%' justifyContent='flex-end' width='85%'>
       <Heading size='sm'>Home</Heading>
       <Heading size='sm'>How Does it work ?</Heading>
       <Heading size='sm'>Pricing</Heading>
       <Heading size='sm'>About us</Heading>
<Button px={3} colorScheme='teal'>Sign up</Button>
<Button px={3} colorScheme='teal'>Log in</Button>

     </HStack>
    </HStack>
  );
}

export default NavBar;
