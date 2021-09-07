import React, {useState} from 'react';
import AuthInput from '../../components/AuthInput';
import {useAppDispatch} from '../../hooks/redux';
import {signInUser} from '../../redux/authentication/actions';
import SectionHeader from '../../components/SectionHeader';
import SquareButton from '../../components/SquareButton';
import {isValidSignupForm} from '../../utils/inputValidators';
import './index.scss';

type Props = {};

const SignupLayout: React.FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    const value = e.currentTarget.value;

    setEmail(value.trim());
  };

  const handlePasswordChange = (e) => {
    const value = e.currentTarget.value;

    setPassword(value.trim());
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.currentTarget.value;

    setConfirmPassword(value.trim());
  };

  const handleSubmitForm = () => {
    dispatch(
      signInUser({
        email,
        password,
      }),
    );
  };

  const getFormErrors = () => {
    if (!password && !confirmPassword && !email) {
      return [];
    }

    return isValidSignupForm(email, password, confirmPassword);
  };

  const errors = getFormErrors();

  return (
    <div className='signup-layout__container'>
      <SectionHeader content='Sign up' />
      <div className='signup-form'>
        <AuthInput
          type='text'
          placeholder='Enter your email'
          handleOnChange={handleEmailChange}
          value={email}
        />
        <AuthInput
          type='password'
          placeholder='Enter your password'
          handleOnChange={handlePasswordChange}
          value={password}
        />
        <AuthInput
          type='password'
          placeholder='Confirm your password'
          handleOnChange={handleConfirmPasswordChange}
          value={confirmPassword}
        />
      </div>
      {errors.length > 0 &&
        errors
          .filter(({isValid}) => !isValid)
          .map((error, index) => <li key={index}>{error.errorMessage}</li>)}
      <div className='signup-button__container'>
        <SquareButton
          buttonLabel='Sign up'
          backgroundColor='#3d3f43'
          textColor='#eaebef'
          handleOnClick={handleSubmitForm}
        />
      </div>
    </div>
  );
};

export default SignupLayout;
