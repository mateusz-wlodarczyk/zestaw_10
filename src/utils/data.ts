import { setHours, setMinutes } from 'date-fns';
import { Doctor, UserVisit } from './types';

export const doctors: Doctor[] = [
  {
    name: 'Doctor_Mateusz',
    id: 1,
    medicalSpecialization: 'surgeon',
    excludedDates: [
      setHours(setMinutes(new Date('2024-02-05'), 0), 17),
      setHours(setMinutes(new Date('2024-01-05'), 0), 17),
    ],
  },
  {
    name: 'Doctor_Adam',
    id: 2,
    medicalSpecialization: 'speechTherapist',
    excludedDates: [
      setHours(setMinutes(new Date('2024-02-06'), 0), 17),
      setHours(setMinutes(new Date('2024-01-08'), 0), 17),
    ],
  },
  {
    name: 'Doctor_Jan',
    id: 3,
    medicalSpecialization: 'neurologist',
    excludedDates: [setHours(setMinutes(new Date('2024-02-07'), 0), 17)],
  },
  {
    name: 'Doctor_Jacek',
    id: 4,
    medicalSpecialization: 'radiologist',
    excludedDates: [setHours(setMinutes(new Date('2024-02-08'), 0), 17)],
  },
];

export const usersVisits: UserVisit[] = [
  {
    id: 1,
    name: 'user_Janusz',
    visits: [
      {
        id: 1,
        doctor: 'Doctor_Mateusz',
        date: setHours(setMinutes(new Date('2024-01-05'), 0), 17),
        comment: 'thats ok',
      },
      {
        id: 2,
        doctor: 'Doctor_Adam',
        date: setHours(setMinutes(new Date('2024-01-08'), 0), 17),
        comment: '',
      },
    ],
  },
  { id: 2, name: 'user_Wojtek', visits: [] },
  { id: 3, name: 'user_Robert', visits: [] },
];
