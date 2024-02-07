import React from 'react';
import DatePicker from 'react-datepicker';
import { FlexForLabelSxStyle } from '../pages/RegisterVisit';
import { Box, Flex, FormControl, FormLabel } from '@chakra-ui/react';
export default function SingleDataPicker({
  text,
  selected,
  onChange,
  excludeTimes,
}: {
  text: string;
  selected: Date;
  onChange: (date: Date) => void;
  excludeTimes: Date[];
}) {
  return (
    <Flex sx={FlexForLabelSxStyle}>
      <Box>
        <FormControl>
          <FormLabel>{text}</FormLabel>
          <DatePicker
            showIcon
            required
            selected={selected}
            onChange={onChange}
            showTimeSelect
            minTime={new Date(0, 0, 0, 10, 0)}
            maxTime={new Date(0, 0, 0, 19, 0)}
            excludeTimes={excludeTimes}
            dateFormat='Pp'
          />
        </FormControl>
      </Box>
    </Flex>
  );
}
