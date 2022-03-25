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
        <FormControl px={3} display="flex" flexDirection="column" gap={2} mt="10%" >
  <FormLabel htmlFor='country' fontSize="3xl">Add your Informations:</FormLabel>
  <FormLabel pt='5'>Family Name</FormLabel>
  <Input  placeholder='"Family Name"'/>
  <FormLabel pt='5' >Name</FormLabel>  <Input  placeholder='"Name"'/>

  <FormLabel pt='5'>Date of birth</FormLabel>  <Input  placeholder='"Date of birth"'/>
  <FormLabel pt='5'>Adress</FormLabel>
  <Input  placeholder='"Adress"'/>
<Flex justifyContent="space-between">
<FormLabel pt='5'>Gender:</FormLabel>
<RadioGroup defaultValue='Male'>
    <HStack spacing='24px'>
      <Radio value='Male' pt='5'>Male</Radio>
      <Radio value='Woman' pt='5'>Female</Radio>
    </HStack>
    </RadioGroup>
</Flex>
<Flex justifyContent="space-between">
<FormLabel pt='5'>Situation:</FormLabel>
<RadioGroup defaultValue='Married'>
    <HStack spacing='24px'>
      <Radio value='Married' pt='5'>Married</Radio>
      <Radio value='Single' pt='5'>Single</Radio>
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