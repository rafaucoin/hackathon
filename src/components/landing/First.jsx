import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Image,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import image from '../../assets/mockup.png';
import eclipse1 from '../../assets/Ellipse1.png';
function First() {
  return (
    <>
      <Image src={eclipse1} h='50%' w='40%' position='absolute'></Image>  
      <Flex h="100%" p={0} justifyContent="space-evenly" alignItems='start' >
        <Image src={image} h="40%" w='40%'></Image>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          gap="3"
          mt='130'
          w="30%"
        >
          <Heading>You want to track your health ?</Heading>
          <Text>
            We give you the chance to record your medical informations and share
            them with your doctors.
          </Text>
          <Button width="45%" bg="#7BE595" color="white">
            Get the App
          </Button>
        </Flex>
      </Flex>
      <Flex h="100%" p={0} justifyContent='space-evenly' alignItems='center' >
      <Image src={image} h='60%'></Image>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        gap="3"
        w='30%'
      >
        <Heading>You want to track your health ?</Heading>
        <Text>
          We give you the chance to record your medical informations and share
          them with your doctors.
        </Text>
        <Button width="45%" bg="#7BE595" color="white">
          Get the App
        </Button>
      </Flex>
    </Flex>
    </>
  );
}

export default First;
