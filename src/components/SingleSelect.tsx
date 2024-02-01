import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { Doctor, UserVisit } from '../utils/types';

//dodac typeguard dla:onChangeProp/arrayProps?

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
  onChangeProp: (e: React.ChangeEvent<HTMLSelectElement> | React.MouseEvent<HTMLElement>) => void;
  valueProp: string;
}) {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Select placeholder={textPlaceholder} onChange={onChangeProp} value={valueProp}>
        {arrayProps !== undefined &&
          arrayProps.map((el) => {
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
