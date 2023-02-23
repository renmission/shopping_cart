import Input from '../../components/Input';

export const changePasswordFields = [
  {
    component: Input,
    name: 'newPassword',
    id: 'new-password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'New Password',
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
    placeholder: 'Confirm New Password',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const changePasswordInitialValues = changePasswordFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
