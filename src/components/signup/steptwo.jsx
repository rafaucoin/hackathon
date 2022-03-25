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

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

// SignUp step two Function
function Step() {
  return (
    <Container p={0}  w="100vw">
        <Flex alignItems="center" height="10vh" justifyContent="space-around">
          <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AiOutlineArrowLeft/>} fontFamily="component-heading-small/lg"> Sign Up</Button>
          <Text fontFamily="component-text/sm"> Patient Profile</Text>
        </Flex>
        <FormControl px={3} display="flex" flexDirection="column" gap={2} mt="10%" >
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

        <Stack direction='column' justifyContent="center" align='center' pt="14" >
          <Button colorScheme='teal' variant='solid' >
          Create profile
          </Button>
          <Button colorScheme='teal' variant='outline' >
          Go Back
          </Button>
        </Stack>

        
    </Container>
  );
}

export default Step;