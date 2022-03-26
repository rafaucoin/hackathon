import React, { useState } from 'react';

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Button,
  VStack,
  Image,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../firstpage/style.css';
import first from '../../assets/first.png';
import second from '../../assets/second.png';
import third from '../../assets/third.png';
import fourth from '../../assets/fourth.png';

import { Autoplay, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';
export default () => {
  const [slide, setSlide] = useState(0);
  const cards = [
    {
      title: 'Welcome',
      text: 'Use our app',
      image: first,
    },
    {
      title: 'You want to track your health ?',
      text: 'Use our app',
      image: second,
    },
    {
      title: 'Are you a doctor ?',
      text: 'Use our app',
      image: third,
    },
    {
      title: 'You are a doctor ?',
      text: 'Use our app',
      image: fourth,
    },
  ];
  const navigate = useNavigate();
  const handlerOnClick = e => {
    navigate('/getstarted');
  };
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
        }}
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setSlide(activeIndex)}
        onSwiper={swiper => console.log(swiper)}
        className="mySwiper"
      >
        {cards.map(card => (
          <>
            <SwiperSlide>
              <Container
                w="100vw"
                h="65vh"
                p="0"
                borderBottomRadius="35%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#369D9F"
                mb="20"
              >
                <Image w="80%" src={card.image} />
              </Container>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <Heading fontSize="2xl" textAlign="center">
        {cards[slide].title}
      </Heading>
      <Text fontSize="lg" textAlign="center">
        {cards[slide].text}
      </Text>
      <VStack pt={5}>
        <Button px="6" bg="#7BE595" color="white" onClick={handlerOnClick}>
          Get started
        </Button>
      </VStack>
    </>
  );
};
