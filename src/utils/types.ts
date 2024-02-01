export type Comment = {
  name: string;
  idUser: number;
  id: number;
  date: Date;
};
export type Doctor = {
  name: string;
  id: number;
  medicalSpecialization: string;
  excludedDates: Date[];
};

export type Visit = {
  doctor: string;
  id: number;
  date: Date;
  comment: string;
};

export type UserVisit = {
  id: number;
  name: string;
  visits: Visit[];
};
export type WelcomeText = {
  header: string;
  paragraph_1: string;
  paragraph_2: string;
};
