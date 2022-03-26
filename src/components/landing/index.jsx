import { Container } from '@chakra-ui/react'
import React from 'react'
import { LargeNav } from '../shared/NavBar'
import First from './First'

function Landing() {
  return (
      <Container position='relative' maxW='100vw' p={0}>

    <LargeNav/>
    {/* part */}
    <First/>
      </Container>
  )
}

export default Landing