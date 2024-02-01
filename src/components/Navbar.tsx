import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ROUTES } from '../utils/constants';
import SingleNavbar from './SingleNavbar';

export const boxSxStyle = {
  margin: '35px',
  width: '100px',
  textAlign: 'center',
};

export default function Navbar() {
  return (
    <Flex gap='40px' flexDirection='column' alignItems='center' sx={boxSxStyle}>
      <SingleNavbar link={ROUTES.home.link} text={ROUTES.home.text} icon={ROUTES.home.icon} />
      <Box>
        <SingleNavbar link={ROUTES.visit.link} text={ROUTES.visit.text} icon={ROUTES.visit.icon} />
        <SingleNavbar
          link={ROUTES.comment.link}
          text={ROUTES.comment.text}
          icon={ROUTES.comment.icon}
        />
        <SingleNavbar
          link={ROUTES.commenstSection.link}
          text={ROUTES.commenstSection.text}
          icon={ROUTES.commenstSection.icon}
        />
      </Box>
    </Flex>
  );
}
