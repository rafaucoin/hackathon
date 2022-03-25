import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Spacer,
  Grid,
  theme,
  FormControl,
  Input,
  Image,
  FormHelperText,
  FormLabel,
  Button,
  Container,
  border,
} from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from 'react';
export default function ChooseProfile() {
    const [first, setfirst] = useState([0,0,0])
  return (
    <Container p={0} display="flex" flexDirection="column" w="100vw">
      <Box py={6} px={3.5} h="55vh" w="100vw" bg="#F0FFF4">
        <Button
          variant='unstyled'
          fontSize='2xl'  
          fontWeight='bold'
          display="flex"
          alignItems="center"
          leftIcon={<AiOutlineArrowLeft></AiOutlineArrowLeft>}
        >
          Sign up
        </Button>
      </Box>

      <Text my="3.5" textAlign="center" fontSize="2xl" fontWeight="bold">
        Choose your profil
      </Text>
      <Flex justifyContent="space-evenly">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          h="50%"
          w="25%"
          borderRadius="2xl"
        >
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            borderRadius="2xl"
            border={first[0]?'3px solid':''}
        onClick={()=> setfirst([1,0,0])}
          />
          <Text mt="1" fontSize="lg" fontWeight="semibold">
            Patient
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          h="50%"
          w="25%"
          borderRadius="2xl"
        >
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            borderRadius="2xl"
            border={first[1]?'3px solid':''}
            onClick={()=>{
                setfirst([0,1,0])
            }}
          />
          <Text mt="1" fontSize="lg" fontWeight="semibold">
            Doctor
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          h="50%"
          w="25%"
          borderRadius="2xl"
        >
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            borderRadius="2xl"
            border={first[2]?'3px solid':''}
            onClick={()=>{
                setfirst([0,0,1])
            }}
          />
          <Text mt="1" fontSize="lg" fontWeight="semibold">
            Clinique
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-around" mt="7" alignItems="center">
        <Button
          display="flex"
          alignItems="center"
          variant="unstyled"
          leftIcon={<AiOutlineArrowLeft></AiOutlineArrowLeft>}
        >
          Back
        </Button>
        <Button
          display="flex"
          alignItems="center"
          variant="unstyled"
          rightIcon={<AiOutlineArrowRight></AiOutlineArrowRight>}
        >
          Continue
        </Button>
      </Flex>
    </Container>
  );
}
