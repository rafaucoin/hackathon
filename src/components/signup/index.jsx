import React from 'react'
import {
    Container, 
    Flex,
    Input,
    Button,
    Text,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    HStack,
    IconButton
} from '@chakra-ui/react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

// SignUp step one Function
function SignUp() {
  const navigate = useNavigate();
  const submit = e => {
    navigate('/signup/2');
  };
  return (

    <Container p={0}  w="100vw">
        <Flex alignItems="center" height="10vh" justifyContent="space-between" pr={2}>
            <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AiOutlineArrowLeft/>} > Sign Up</Button>
            <Text > Patient Profile</Text>
        </Flex>
        <FormControl px={3} display="flex" flexDirection="column" gap={1}  >
  <FormLabel htmlFor='country' fontSize="3xl">Add your Informations:</FormLabel>
  <FormLabel pt='5'>Family Name</FormLabel>
  <Input  placeholder='"Family Name"' isRequired/>
  <FormLabel pt='5' >Name</FormLabel>  <Input  placeholder='"Name"'/>

  <FormLabel pt='5'>Date of birth</FormLabel>  <Input  placeholder='"Date of birth"'/>
  <FormLabel pt='5'>Adress</FormLabel>
  <Input  placeholder='"Adress"' isRequired/>
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
<Flex alignItems="center" mt='20%' height="10vh" justifyContent="center" pr={2}>
<IconButton onClick={submit} type='submit' size='lg' borderRadius='50%' colorScheme='green' icon={<BsArrowRight/>}/>
        </Flex>
</FormControl>

    </Container>
  );
}

export default SignUp