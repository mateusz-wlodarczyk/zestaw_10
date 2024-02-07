import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChangeEvent, ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { usersVisits } from '../utils/data';
import { Box, Button, Flex, FormLabel, Select } from '@chakra-ui/react';
import { FlexForLabelSxStyle, labelSxStyle, mainBoxSxStyle } from './RegisterVisit';
import SingleSelect from '../components/SingleSelect';
import { UserVisit, Visit } from '../utils/types';
import SingleTextArea from '../components/SingleTextArea';

export default function CommentVisit() {
  const [databaseUsersVisits, setDatabaseUsersVisits] = useState<UserVisit[]>(usersVisits);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedVisitForUser, setSelectedVisitForUser] = useState<Visit[]>();
  const [visitArray, setVisitArray] = useState<string[]>();
  const [textForComment, setTextForComment] = useState('');

  const handleChangeSelectedUser: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value.length === 0) {
      setSelectedVisitForUser([]);
      return;
    } else {
      setSelectedUser(e.currentTarget.value);

      const newArrayUser = usersVisits.filter((el) => el.name === e.currentTarget.value);
      setSelectedVisitForUser(newArrayUser[0].visits);
      if (newArrayUser[0].visits.length === 0) {
        return;
      } else {
        setVisitArray([newArrayUser[0].visits[0].doctor, newArrayUser[0].visits[0].id.toString()]);
      }
    }
  };

  const handleChangeSelectedVisitForUser: ChangeEventHandler = (
    e: ChangeEvent<HTMLSelectElement>,
  ) => {
    const newArrayVisit = e.currentTarget.value.split(' ');
    if (newArrayVisit.length === 0 || e.currentTarget.value.length === 0) return;
    setVisitArray(newArrayVisit);
  };

  const handleTextAreaChange: ChangeEventHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextForComment(e.currentTarget.value);
  };
  const handleSubmitComment: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (textForComment === '' || visitArray === undefined || selectedVisitForUser === undefined)
      return;

    usersVisits.map((el) => {
      if (el.name === selectedUser) {
        return el.visits.map((el) => {
          if (el.id === Number(visitArray[1]) && el.doctor === visitArray[0]) {
            el.comment = textForComment;
            return { ...el, comment: textForComment };
          }
        });
      }
    });

    setSelectedUser('');
    setSelectedVisitForUser([]);
    setVisitArray([]);
    setTextForComment('');
  };
  return (
    <>
      <Box sx={mainBoxSxStyle}>
        <form>
          <SingleSelect
            text={'Select user:'}
            textPlaceholder={'list of users'}
            arrayProps={databaseUsersVisits}
            onChangeProp={handleChangeSelectedUser}
            valueProp={selectedUser}
          />

          <Flex sx={FlexForLabelSxStyle}>
            <Box sx={labelSxStyle}>
              <FormLabel>Select visit: </FormLabel>
            </Box>
            <Box>
              <Select onChange={handleChangeSelectedVisitForUser} placeholder='list of visit'>
                {selectedVisitForUser !== undefined &&
                  selectedVisitForUser.map((el) => {
                    if (el.date < new Date() && el.comment.length === 0)
                      return (
                        <option key={el.id} value={el.doctor + ' ' + el.id}>
                          visit: #{el.id} doctor: {el.doctor}
                        </option>
                      );
                  })}
              </Select>
            </Box>
          </Flex>
          <SingleTextArea
            text={'write comment:'}
            valueProp={textForComment}
            handleOnChange={handleTextAreaChange}
          />
          <Button type='submit' onClick={handleSubmitComment}>
            add comment
          </Button>
        </form>
      </Box>
    </>
  );
}
