import React from 'react';
import { Heading, Image, Box } from '@chakra-ui/react';
import HeroImage from './../utils/wide.jpg';

const Hero = () => {
  return (
    <Box
      backgroundImage={`url('${HeroImage}')`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="200px"
      borderRadius="10px"
    >
      <Box
        borderRadius="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      >
        <Heading color="whiteAlpha.600" fontFamily="Dancing Script" size="2xl">
          Welcome
        </Heading>
      </Box>
    </Box>
  );
};

export default Hero;
