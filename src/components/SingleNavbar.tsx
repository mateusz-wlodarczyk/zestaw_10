import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SingleNavbar({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: JSX.Element;
}) {
  return (
    <Link to={link}>
      <Box>
        <Flex gap='0px' flexDirection='column' alignItems='center'>
          {icon}
          <Text>{text}</Text>
        </Flex>
      </Box>
    </Link>
  );
}
