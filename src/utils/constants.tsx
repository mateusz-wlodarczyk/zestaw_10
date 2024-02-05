import { CiMedicalCase } from 'react-icons/ci';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdErrorOutline, MdOutlineAddComment, MdOutlinePersonalInjury } from 'react-icons/md';
import { WelcomeText } from './types';

export const iconStyle = {
  width: '55px',
  height: '55px',
};

export const iconStyleLogo = {
  width: '85px',
  height: '85px',
  color: 'red',
};
export const iconStyleError = {
  width: '185px',
  height: '185px',
};

export const ROUTES = {
  home: { text: 'medicalCare', link: '/', icon: <CiMedicalCase style={iconStyleLogo} /> },

  visit: { text: 'visit', link: '/visit', icon: <MdOutlinePersonalInjury style={iconStyle} /> },
  comment: { text: 'comment', link: '/comment', icon: <MdOutlineAddComment style={iconStyle} /> },
  commenstSection: {
    text: 'comment section',
    link: '/commentSection',
    icon: <FaRegCommentAlt style={iconStyle} />,
  },
  error: { text: 'wrong page', link: '*', icon: <MdErrorOutline style={iconStyleError} /> },
};

export const welcomeText: WelcomeText = {
  header: 'header main ',
  paragraph_1:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam impedit vel  nostrum temporibus consectetur, quibusdam provident qui? Similique vel, molestiae eius iure deserunt quisquam cum expedita iusto! Sequi, nisi. Lorem ipsum dolor sit amet consectetur  adipisicing elit. Itaque eum inventore quas, deserunt veniam nemo illo suscipit eos sit  fugiat unde fugit quod asperiores dolor delectus temporibus autem iure recusandae.',
  paragraph_2:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam impedit vel  nostrum temporibus consectetur, quibusdam provident qui? Similique vel, molestiae eius iure  deserunt quisquam cum expedita iusto! Sequi, nisi. Lorem ipsum dolor sit amet consectetur  adipisicing elit. Itaque eum inventore quas, deserunt veniam nemo illo suscipit eos sit  fugiat unde fugit quod asperiores dolor delectus temporibus autem iure recusandae.',
};
