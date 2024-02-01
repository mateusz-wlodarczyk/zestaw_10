import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function SingleComment({
  comment,
  index,
  author,
}: {
  comment: string;
  index: number;
  author: string;
}) {
  return (
    <Box sx={{ margin: '15px' }}>
      <Text>#{index}</Text>
      <Text>author: {author}</Text>
      <Text>comment: {comment}</Text>
    </Box>
  );
}
