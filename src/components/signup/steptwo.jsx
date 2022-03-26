import React from 'react'
import {
    Container, 
    Flex,
    Input,
    Button,
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    HStack,
    Stack
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

// SignUp step two Function
function Step() {
  let navigate = useNavigate();
  const submit = e => {
    navigate('/signup/3');
  };
  return (
    <Container p={0}  w="100vw">
        <Flex alignItems="center" height="10vh" justifyContent="space-between" pr={2}>
            <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AiOutlineArrowLeft/>} > Sign Up</Button>
            <Text > Patient Profile</Text>
        </Flex>
        <FormControl onSubmit={submit} px={3} display="flex" flexDirection="column" gap={2} mt="10%" >
          <FormLabel htmlFor='country' fontSize="3xl" fontFamily="component-text/2xl">Finish profile creating:</FormLabel>
          <FormLabel pt='5' fontFamily="text-md/lineHeight-6/font-medium" >Add phone number</FormLabel>
          <Input  placeholder='"Phone number"'/>
          <FormLabel pt='5' fontFamily="text-md/lineHeight-6/font-medium" >Enter your password</FormLabel>  
          <Input type="password" className='realpassword' placeholder='"password"'/> 
          <FormLabel pt='5' fontFamily="text-md/lineHeight-6/font-medium">Confirm your password</FormLabel>  
          <Input type="password" className='confirmpassword' placeholder='"confirm password"'/>

          

          <FormLabel pt='5' color="#AEAEAE" fontFamily="text-md/lineHeight-6/font-medium" >Use e-mail to finish profile creating </FormLabel>
          <Input  placeholder='"e-mail"'/>
        </FormControl>

        <Stack direction='column' justifyContent="center" align='center' pt={4} >
          <Button onClick={submit} colorScheme='teal' variant='solid' >
          Create profile
          </Button>
          <Button colorScheme='teal' variant='outline'  >
          Go Back
          </Button>
        </Stack>

        
    </Container>
  );
}

export default Step;