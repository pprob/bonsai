import React, {useState} from 'react';
import './index.scss';
import SectionHeader from '../../components/SectionHeader';
import AuthInput from '../../components/AuthInput';
import SquareButton from '../../components/SquareButton';
import {isValidSigninForm} from '../../utils/inputValidators';
import {useAppDispatch} from '../../hooks/redux';
import {emailRegex} from '../../utils/inputValidators';
import {signinUser} from '../../redux/authentication/actions';

type Props = {};

const SigninLayout: React.VFC<Props> = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    const value = e.currentTarget.value;

    setEmail(value.trim());
  };

  const handlePasswordChange = (e) => {
    const value = e.currentTarget.value;

    setPassword(value.trim());
  };

  const handleSubmitForm = () => {
    if (emailRegex.test(email)) {
      return dispatch(signinUser({email, password}));
    }
  };

  const getFormErrors = () => {
    if (!email) {
      return [];
    }

    return isValidSigninForm(email);
  };

  const errors = getFormErrors().filter(({isValid}) => !isValid);

  return (
    <div className='sigin-layout__container'>
      <SectionHeader content='Sign in' />
      <div className='signin-form'>
        <AuthInput
          type='text'
          value={email}
          placeholder='Enter your email'
          handleOnChange={handleEmailChange}
        />
        <AuthInput
          type='password'
          value={password}
          placeholder='Enter your password'
          handleOnChange={handlePasswordChange}
        />
      </div>
      {errors.length > 0 && (
        <div className='signin-errors__container'>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error.errorMessage}</li>
            ))}
          </ul>
        </div>
      )}
      <div className='signin-button__container'>
        <SquareButton
          buttonLabel='Sign in'
          backgroundColor='#3d3f43'
          disabled={!email || !password}
          textColor='#eaebef'
          handleOnClick={handleSubmitForm}
        />
      </div>
    </div>
  );
};

export default SigninLayout;
