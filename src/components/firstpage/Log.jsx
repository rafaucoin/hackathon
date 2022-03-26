import { Image, VStack, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../assets/logo.png';
import {useNavigate} from 'react-router-dom'

function Log() {
  const navigate = useNavigate();

  const handlerSignUp = e => {
    navigate('/signup/1');
  };
  const handlerLogin = e => {
    navigate('/login');
  };
  return (
    <Flex
      mt="10"
      flexDirection="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Image w="60%" src={Logo} />
      <Flex
        mt="20"
        width="100%"
        alignItems="center"
        flexDirection="column"
        gap={3}
      >
        <Button onClick={handlerSignUp} width="45%" bg="#7BE595" color="white">
          Sign up
        </Button>
        <Button onClick={handlerLogin}  width="45%" bg="#369D9F" color="white">
          Log in
        </Button>
      </Flex>
    </Flex>
  );
}

export default Log;
