import React from 'react';
import { Visit } from '../utils/types';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export default function SingleSelectForCombinedArrays({
  text,
  textPlaceholder,
  arrayProps,
  onChangeProp,
  valueProp,
}: {
  text: string;
  textPlaceholder: string;
  arrayProps: Visit[];
  onChangeProp: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  valueProp: string[];
}) {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Select placeholder={textPlaceholder} onChange={onChangeProp} value={valueProp}>
        {arrayProps !== undefined &&
          arrayProps.map((el) => {
            if (el.date < new Date() && el.comment.length === 0)
              return (
                <option key={el.id} value={el.doctor + ' ' + el.id}>
                  visit: #{el.id} doctor: {el.doctor}
                </option>
              );
          })}
      </Select>
    </FormControl>
  );
}
