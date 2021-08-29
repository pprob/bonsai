import React from 'react';
import './index.scss';

type Props = {
  handleOnClick: () => void;
};

const CloseButton: React.FC<Props> = ({handleOnClick}: Props) => {
  return (
    <div className='button__container' onClick={handleOnClick}>
      <div className='left-to-right'></div>
      <div className='right-to-left'></div>
    </div>
  );
};

export default CloseButton;
