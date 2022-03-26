import { Image, VStack, Flex, Button, FormControl, Input, FormLabel, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../assets/logo.png';
import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
  const handlerSignUp = e => {
    navigate('/signup/0');
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
      <FormControl
      display='flex'
        mt="20"
        width="90%"
        // height='50vh'
        alignItems="center"
        flexDirection="column"
        gap={5}
      >
          <FormLabel alignSelf='flex-start'>Phone number</FormLabel>
<Input placeholder='Phone number'/>
<FormLabel alignSelf='flex-start'>Phone number</FormLabel>
<Input placeholder='Phone number'/>
<Button colorScheme='green' width='40%'>Login</Button>
<Text as='ins'>Forget password</Text>
      </FormControl>
    </Flex>
  );
}

export default Login;
