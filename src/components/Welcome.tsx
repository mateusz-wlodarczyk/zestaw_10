import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { welcomeText } from '../utils/constants';

export default function Welcome() {
  return (
    <Box sx={{ margin: '35px', width: '600px' }}>
      <Text sx={{ fontSize: '20px', marginTop: '20px', fontWeight: 'bold', marginBottom: '75px' }}>
        {welcomeText.header}
      </Text>
      <Text sx={{ marginBottom: '75px' }}> {welcomeText.paragraph_1}</Text>

      <Text> {welcomeText.paragraph_2}</Text>
    </Box>
  );
}
