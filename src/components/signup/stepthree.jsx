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
import {useNavigate} from 'react-router-dom'

// SignUp step three Function
function Last() {
  const navigate = useNavigate();

  const submit = e => {
    navigate('/patient');
  };
  return (

    <Container p={0}  w="100vw">
       <Flex alignItems="center" height="10vh" justifyContent="space-between" pr={2}>
            <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AiOutlineArrowLeft/>} > Sign Up</Button>
            <Text > Patient Profile</Text>
        </Flex>

      <Flex alignItems="center" justifyContent="center" direction='column' pt="48">
        <FormLabel pt='5' fontFamily="component-text/2xl" alignItems="center" justifyContent="center" >Enter the code</FormLabel>  
        <Input type="number"  placeholder='"XXXX-YYYY"' width="38"/> 
      </Flex>

      <Stack direction='column' justifyContent="center" align='center' pt="14" >
          <Button onClick={submit}  colorScheme='teal' variant='solid' >
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