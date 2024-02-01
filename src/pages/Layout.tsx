import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex gap='30px' sx={{ justifyContent: 'center', marginTop: '55px' }}>
      <Navbar />
      {children}
    </Flex>
  );
}
