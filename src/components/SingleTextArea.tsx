import { FormControl, FormLabel, Select, Textarea } from '@chakra-ui/react';
import React from 'react';

export default function SingleTextArea({
  text,
  valueProp,
  handleOnChange,
}: {
  text: string;
  valueProp: string;
  handleOnChange: (e: React.ChangeEventHandler<HTMLTextAreaElement>) => void;
}) {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      {/* ts + onChange, jak to ogarnac? */}
      <Textarea onChange={handleOnChange} value={valueProp}></Textarea>
    </FormControl>
  );
}
