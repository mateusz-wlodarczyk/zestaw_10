import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

export default function SingleTextArea({
  text,
  valueProp,
  handleOnChange,
}: {
  text: string;
  valueProp: string;
  handleOnChange: (e: ChangeEvent) => void;
}) {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Textarea onChange={handleOnChange} value={valueProp}></Textarea>
    </FormControl>
  );
}
