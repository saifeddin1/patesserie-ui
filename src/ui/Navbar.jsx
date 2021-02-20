import React from 'react'
import {Flex,Link, Heading} from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';

const Navbar = () => {
  return (
    <Flex color="white" justifyContent='space-between' alignItems='center' my="30px">
      <Heading>
        Patesserie
      </Heading>
      <Flex>
        <Link ml="2">HomePage</Link>
        <Link ml="2">Categories</Link>
        <Link ml="2">Dashboard</Link>
      </Flex>
    </Flex>
  )
}

export default Navbar
