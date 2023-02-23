import Input from '../../components/Input';
import Select from '../../components/Select';
import Check from '../../components/Check';

export const registerFields = [
  {
    component: Input,
    name: 'name',
    id: 'name',
    'data-value': '',
    autoComplete: 'name',
    placeholder: 'Name',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Select,
    name: 'gender',
    id: 'gender',
    'data-value': '',
    autoComplete: 'gender',
    placeholder: 'Gender',
    className: 'rounded-t-md',
    options: [
      { value: '', label: 'Select Gender' },
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
      { value: 'Not Sure', label: 'Not Sure' },
    ],
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Check,
    label: 'Hobbies',
    name: 'hobbies',
    'data-value': [],
    autoComplete: 'hobbies',
    placeholder: 'Hobbies',
    options: [
      { id: 'Basketball', text: 'Basketball' },
      { id: 'Football', text: 'Football' },
      { id: 'Tennis', text: 'Tennis' },
      { id: 'Chess', text: 'Chess' },
    ],
  },
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    placeholder: 'Email',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'Password',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'confirmPassword',
    id: 'confirm-password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'Password',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const registerInitialValues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
