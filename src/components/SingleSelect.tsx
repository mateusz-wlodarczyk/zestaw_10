import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { Doctor, UserVisit } from '../utils/types';

export default function SingleSelect({
  text,
  textPlaceholder,
  arrayProps,
  onChangeProp,
  valueProp,
}: {
  text: string;
  textPlaceholder: string;
  arrayProps: Doctor[] | UserVisit[];
  onChangeProp: (e: ChangeEvent) => void;
  valueProp: string;
}) {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Select placeholder={textPlaceholder} onChange={onChangeProp} value={valueProp}>
        {arrayProps.map((el) => {
          return (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
