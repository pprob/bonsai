import React from 'react';
import {push} from 'connected-react-router';
import {useAppDispatch} from '../../hooks/redux';
import {ReactElement} from 'react';
import {toggleSliderMenuOff} from '../../redux/global/actions';
import './index.scss';

type Props = {
  icon: ReactElement;
  text: string;
  key: number;
  redirectUrl: string;
};

const NavIcon: React.FC<Props> = ({icon, text, redirectUrl}: Props) => {
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(push(redirectUrl));
    dispatch(toggleSliderMenuOff());
  };
  return (
    <div className='icon__container' onClick={handleOnClick}>
      <span className='nav-icon'>{icon}</span>
      <span className='nav-label'>{text}</span>
    </div>
  );
};

export default NavIcon;
