import React from 'react';
import { mainBoxSxStyle } from './RegisterVisit';
import { Box } from '@chakra-ui/react';
import { usersVisits } from '../utils/data';
import SingleComment from '../components/SingleComment';

export default function CommentsSection() {
  let indexOfComments = 0;
  return (
    <Box sx={mainBoxSxStyle}>
      {usersVisits.map((el) => {
        const author = el.name;
        return el.visits.map((el) => {
          indexOfComments++;
          if (el.comment.length > 0)
            return (
              <SingleComment
                key={Math.floor(Math.random() * 958456)}
                comment={el.comment}
                index={indexOfComments}
                author={author}
              />
            );
        });
      })}
    </Box>
  );
}
