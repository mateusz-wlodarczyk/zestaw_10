import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Layout';
import Welcome from '../components/Welcome';

export default function HomePage() {
  return (
    <Box>
      <Welcome />
    </Box>
  );
}
