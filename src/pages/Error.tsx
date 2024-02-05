import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { mainBoxSxStyle } from './RegisterVisit';
import { ROUTES } from '../utils/constants';
export default function Error() {
  return (
    <Box sx={mainBoxSxStyle} color='red'>
      <Flex alignItems='center' fontSize='30px'>
        {ROUTES.error.icon}
        <Text>{ROUTES.error.text}</Text>
      </Flex>
    </Box>
  );
}
