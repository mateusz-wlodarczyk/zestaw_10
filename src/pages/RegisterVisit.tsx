import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useMemo,
  useState,
} from 'react';
import DatePicker from 'react-datepicker';
import { Box, Button, Flex } from '@chakra-ui/react';
import SingleSelect from '../components/SingleSelect';
import SingleDataPicker from '../components/SingleDataPicker';
import { doctors, usersVisits } from '../utils/data';
import { Doctor } from '../utils/types';

export const labelSxStyle = { width: '120px' };
export const FlexForLabelSxStyle = { alignContent: 'center' };
export const mainBoxSxStyle = { margin: '135px 35px 35px 35px', width: '600px' };
export default function RegisterVisit() {
  const [databaseDoctors, setDatabaseDoctors] = useState<Doctor[]>(doctors);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleExcludedTimes = (doctor: string) => {
    const newArray = doctors.filter((el) => el.name === doctor);
    if (newArray.length === 0) {
      return [];
    } else {
      return newArray[0].excludedDates;
    }
  };

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };
  const handleChangeSelectDoctor: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    // Property 'value' does not exist on type 'EventTarget & Element'.ts(2339)
    setSelectedDoctor(e.currentTarget.value);
  };
  const handleChangeSelectUser: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    //Property 'value' does not exist on type 'EventTarget & Element'.ts(2339)
    setSelectedUser(e.currentTarget.value);
  };
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (selectedDoctor.length === 0 || selectedUser.length === 0) return;
    if (startDate.getMinutes() !== 0 || startDate.getMinutes() !== 30) return;

    const filteredArraySelectedDoctor = doctors.filter((el) => el.name === selectedDoctor);
    const filteredArraySelectedUser = usersVisits.filter((el) => el.name === selectedUser);

    [...filteredArraySelectedDoctor[0].excludedDates, startDate];

    const idHelper = Math.floor(Math.random() * 10000);
    const userVisitObj = {
      doctor: selectedDoctor,
      date: startDate,
      id: idHelper,
      comment: '',
    };

    [filteredArraySelectedUser[0].visits, userVisitObj];

    setSelectedDoctor('');
    setSelectedUser('');
    setStartDate(new Date());
  };

  const excludedTimes = useMemo(() => {
    return handleExcludedTimes(selectedDoctor);
  }, [selectedDoctor]);

  return (
    <Box sx={mainBoxSxStyle}>
      <form>
        <Flex alignItems='center'>
          <Box>
            <SingleSelect
              text={'Select user:'}
              textPlaceholder={'list of users'}
              arrayProps={usersVisits}
              onChangeProp={handleChangeSelectUser}
              valueProp={selectedUser}
            />
            <SingleSelect
              text={'Select doctor: '}
              textPlaceholder={'list of doctors'}
              arrayProps={databaseDoctors}
              onChangeProp={handleChangeSelectDoctor}
              valueProp={selectedDoctor}
            />
            <SingleDataPicker
              text={'Select date: '}
              selected={startDate}
              onChange={handleDateChange}
              excludeTimes={excludedTimes}
            />
            <Button type='submit' onClick={handleSubmit}>
              register visit
            </Button>
          </Box>
        </Flex>
      </form>
    </Box>
  );
}
