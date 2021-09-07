import React from 'react';
import './index.scss';

type Props = {
  type: string;
  placeholder: string;
  handleOnChange: (e) => void;
  value: string;
};

const AuthInput: React.FunctionComponent<Props> = ({
  type,
  value,
  handleOnChange,
  placeholder,
}: Props) => {
  return (
    <>
      <input
        type={type}
        className='auth-input'
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </>
  );
};

export default AuthInput;
