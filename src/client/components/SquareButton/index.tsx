import React from 'react';
import './index.scss';

type Props = {
  buttonLabel: string;
  backgroundColor: string;
  textColor: string;
  handleOnClick: () => void;
};

const SquareButton: React.VFC<Props> = ({
  buttonLabel,
  backgroundColor,
  textColor,
  handleOnClick,
}: Props) => {
  const style = {
    backgroundColor,
    color: textColor,
  };
  return (
    <>
      <button className='square-button' style={style} onClick={handleOnClick}>
        {buttonLabel}
      </button>
    </>
  );
};

export default SquareButton;
