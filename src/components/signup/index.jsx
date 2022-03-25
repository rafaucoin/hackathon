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
    HStack
} from '@chakra-ui/react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

// SignUp Function
function SignUp() {
  return (

    <Container p={0}  w="100vw">
        <Flex alignItems="center" height="10vh" justifyContent="space-between">
            <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AiOutlineArrowLeft/>} > Sign Up</Button>
            <Text > Patient Profile</Text>
        </Flex>
        <FormControl px={3} display="flex" flexDirection="column" gap={2} mt="10%">
  <FormLabel htmlFor='country' fontSize="3xl">Add your Informations:</FormLabel>
  <FormLabel>Family Name</FormLabel>
  <Input  placeholder='"Family Name"'/>
  <FormLabel >Name</FormLabel>  <Input  placeholder='"Name"'/>

  <FormLabel >Date of birth</FormLabel>  <Input  placeholder='"Date of birth"'/>
  <FormLabel>Adress</FormLabel>
  <Input  placeholder='"Adress"'/>
<Flex>
<FormLabel>Gender:</FormLabel>
<RadioGroup defaultValue='Male'>
    <HStack spacing='24px'>
      <Radio value='Male'>Male</Radio>
      <Radio value='Woman'>Woman</Radio>
    </HStack>
    </RadioGroup>
</Flex>
<Flex>
<FormLabel>Situation:</FormLabel>
<RadioGroup defaultValue='Married'>
    <HStack spacing='24px'>
      <Radio value='Married'>Married</Radio>
      <Radio value='Single'>Single</Radio>
    </HStack>
    </RadioGroup>
</Flex>
</FormControl>
<Flex alignItems="center" height="10vh" justifyContent="space-between">
            <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AiOutlineArrowLeft/>} > Back</Button>
            <Button display="flex" alignItems="center" variant="unstyled" rightIcon={<AiOutlineArrowRight/>} > Continue</Button>
        </Flex>
    </Container>
  )
}

export default SignUp