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

// SignUp step three Function
function Last() {
  return (

    <Container p={0}  w="100vw">
      <Flex alignItems="center" height="10vh" justifyContent="space-between">
          <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AiOutlineArrowLeft/>} fontFamily="component-heading-small/lg"> Sign Up</Button>
          <Text fontFamily="component-text/sm"> Patient Profile</Text>
      </Flex>

      <Flex alignItems="center" justifyContent="center" direction='column' pt="48">
        <FormLabel pt='5' fontFamily="component-text/2xl" alignItems="center" justifyContent="center" >Enter the code</FormLabel>  
        <Input type="number"  placeholder='"XXXX-YYYY"' width="38"/> 
      </Flex>

      <Stack direction='column' justifyContent="center" align='center' pt="14" >
          <Button colorScheme='teal' variant='solid' >
          Confirm
          </Button>
          <Button colorScheme='teal' variant='outline' >
          Resend code
          </Button>
      </Stack>




      
        
    </Container>
  )
}

export default Last