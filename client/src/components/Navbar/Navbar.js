import React from 'react'
import { Box, Heading, Flex, Image } from '@chakra-ui/react'
import House from '../../images/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg'

export default function Navbar() {
  return (
    <Flex padding='1' justify='center' alignItems='center' borderWidth={1} bg='teal'>
      <Box fontWeight='bold'>
        <Heading>Memories</Heading>
      </Box>
      <Box paddingLeft={2}>
        <Image src={House} alt='house' boxSize='60px' objectFit='cover' />
      </Box>
    </Flex>
  )
}
