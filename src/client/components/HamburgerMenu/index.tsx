import React from 'react';
import {useAppDispatch} from '../../hooks/redux';
import {toggleSliderMenu} from '../../redux/global/actions';

import './index.scss';

type Props = {};

const HamBurgerMenu: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(toggleSliderMenu());
  };
  return (
    <div className='hamburger-menu__container' onClick={handleOnClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamBurgerMenu;
