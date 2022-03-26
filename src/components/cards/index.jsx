import { Container } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../shared/NavBar'
import DocCard from './DocCard'

function Doctors() {
  return (
    <Container display='flex' flexDirection='column' gap={0}>
        <DocCard/>
        <DocCard/>

        <DocCard/>

        <DocCard/>

        <DocCard/>

        <DocCard/>

        <DocCard/>
<NavBar/>
    </Container>
  )
}

export default Doctors