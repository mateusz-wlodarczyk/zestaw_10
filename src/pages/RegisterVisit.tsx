import React, { useState } from 'react';
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
      return;
    } else {
      return newArray[0].excludedDates;
    }
  };

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };
  const handleChangeSelectDoctor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDoctor(e.target.value);
  };
  const handleChangeSelectUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (selectedDoctor.length === 0 || selectedUser.length === 0) return;

    const newArrayDoctors = doctors.filter((el) => el.name === selectedDoctor);
    const newArrayUserUser = usersVisits.filter((el) => el.name === selectedUser);
    //jak ladniej zapisac push?tak to nie dziala
    //const mwArr = [...newArrayDoctors[0].excludedDates, (startDate);]

    newArrayDoctors[0].excludedDates.push(startDate);
    const idHelper = Math.floor(Math.random() * 10000);
    const userVisitObj = {
      doctor: selectedDoctor,
      date: startDate,
      id: idHelper,
      comment: '',
    };
    //cos zamiast push?

    newArrayUserUser[0].visits.push(userVisitObj);

    //na pozniej dla mnie (mw) walidacja ustawionego czasu, np 14:58

    setSelectedDoctor('');
    setSelectedUser('');
    setStartDate(new Date());
  };

  return (
    <Box sx={mainBoxSxStyle}>
      <form>
        <Flex alignItems='center'>
          <Box>
            <SingleSelect
              text={'Select user:'}
              textPlaceholder={'list of users'}
              arrayProps={usersVisits}
              // jak mu pomoc z ts?
              onChangeProp={handleChangeSelectUser}
              valueProp={selectedUser}
            />
            <SingleSelect
              text={'Select doctor: '}
              textPlaceholder={'list of doctors'}
              arrayProps={databaseDoctors}
              // jak mu pomoc z ts?
              onChangeProp={handleChangeSelectDoctor}
              valueProp={selectedDoctor}
            />
            <SingleDataPicker
              text={'Select date: '}
              selected={startDate}
              onChange={handleDateChange}
              // jak mu pomoc z ts?
              excludeTimes={handleExcludedTimes(selectedDoctor)}
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
