import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { usersVisits } from '../utils/data';
import { Box, Button, Flex, FormLabel, Select } from '@chakra-ui/react';
import { FlexForLabelSxStyle, labelSxStyle, mainBoxSxStyle } from './RegisterVisit';
import SingleSelect from '../components/SingleSelect';
import { UserVisit, Visit } from '../utils/types';
import SingleSelectForCombinedArrays from '../components/SingleSelectForCombinedArrays';
import SingleTextArea from '../components/SingleTextArea';

export default function CommentVisit() {
  const [databaseUsersVisits, setDatabaseUsersVisits] = useState<UserVisit[]>(usersVisits);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedVisitForUser, setSelectedVisitForUser] = useState<Visit[]>();
  const [visitArray, setVisitArray] = useState<string[]>();
  const [textForComment, setTextForComment] = useState('');

  const handleChangeSelectedUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value.length === 0) {
      setSelectedVisitForUser([]);
      return;
    } else {
      setSelectedUser(e.target.value);
      const newArrayUser = usersVisits.filter((el) => el.name === e.target.value);
      setSelectedVisitForUser(newArrayUser[0].visits);
      if (newArrayUser[0].visits.length === 0) {
        return;
      } else {
        setVisitArray([newArrayUser[0].visits[0].doctor, newArrayUser[0].visits[0].id.toString()]);
      }
    }
  };

  const handleChangeSelectedVisitForUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newArrayVisit = e.target.value.split(' ');
    if (newArrayVisit.length === 0 || e.target.value.length === 0) return;
    setVisitArray(newArrayVisit);
  };

  const handleTextAreaChange = (e: React.ChangeEventHandler<HTMLTextAreaElement>) => {
    // jak to otypowac?
    setTextForComment(e.currentTarget.value);
  };
  const handleSubmitComment = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (textForComment === '' || visitArray === undefined || selectedVisitForUser === undefined)
      return;

    usersVisits.map((el) => {
      if (el.name === selectedUser) {
        return el.visits.map((el) => {
          if (el.id === Number(visitArray[1]) && el.doctor === visitArray[0]) {
            el.comment = textForComment;
            //ten zapis nic nie zmienial, jak to lepiej zapisac?
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
            //?? jak mu pomoc w ts?
            onChangeProp={handleChangeSelectedUser}
            valueProp={selectedUser}
          />

          <Flex sx={FlexForLabelSxStyle}>
            <Box sx={labelSxStyle}>
              <FormLabel>Select visit: </FormLabel>
            </Box>
            <Box>
              <Select
                onChange={handleChangeSelectedVisitForUser}
                placeholder='list of visit'
                // zaznaczanie nie dziala na stronie, nie pokazuje wybranego elementu z listy
                value={visitArray}
              >
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
          {/* chcialem zastapic to powyzej, ponizszym zapisem ale mi wywala blad */}
          {/* react-dom.development.js:86 Warning: The `value` prop supplied to <select> must be a scalar value if `multiple` is false. */}
          {/* <SingleSelectForCombinedArrays
            text={'Select visit: '}
            textPlaceholder={'list of visit'}
            arrayProps={selectedVisitForUser !== undefined ? selectedVisitForUser : []}
            onChangeProp={handleChangeSelectedVisitForUser}
            valueProp={visitArray !== undefined ? visitArray : ['']}
          /> */}

          {/* jak to otypowac? */}
          {/* input/label */}
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
