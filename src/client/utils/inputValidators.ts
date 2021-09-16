/* eslint-disable max-len */

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const containsNumberRegex = /\d/;
const containsSpecialCharacterRegex = /[-!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/;

const getError = (valid: boolean, message: string): authErrors => ({
  isValid: valid,
  errorMessage: message,
});

type authErrors = {
  isValid: boolean;
  errorMessage: string;
};

const isValidSignupForm = (
  email: string,
  password: string,
  password2: string,
): authErrors[] => [
  getError(emailRegex.test(email), 'Please use a valid email address'),
  getError(
    containsNumberRegex.test(password),
    'Password must contain a number',
  ),
  getError(
    containsSpecialCharacterRegex.test(password),
    `Password must contain atleast one of the following !$%^&*@()[]:;'<>?,./`,
  ),
  getError(password === password2, 'Passwords must be matching'),
];

const isValidSigninForm = (email: string, password: string): authErrors[] => [
  getError(emailRegex.test(email), 'Please enter a valid email address'),
  getError(password !== '', 'Please enter your password'),
];

export {isValidSignupForm, isValidSigninForm};
