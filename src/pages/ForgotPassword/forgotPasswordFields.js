import Input from '../../components/Input';

export const forgotPasswordFields = [
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    placeholder: 'Email',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const forgotPasswordInitialValues = forgotPasswordFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
