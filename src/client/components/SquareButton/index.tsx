import React from 'react';
import './index.scss';

type Props = {
  buttonLabel: string;
  backgroundColor: string;
  disabled: boolean;
  textColor: string;
  handleOnClick: () => void;
};

const SquareButton: React.VFC<Props> = ({
  buttonLabel,
  backgroundColor,
  textColor,
  handleOnClick,
  disabled = false,
}: Props) => {
  const style = {
    backgroundColor,
    color: textColor,
  };
  return (
    <>
      <button
        className='square-button'
        style={style}
        onClick={handleOnClick}
        disabled={disabled}
      >
        {buttonLabel}
      </button>
    </>
  );
};

export default SquareButton;
