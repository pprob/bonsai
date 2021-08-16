import React from 'react';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';
import {ReactElement} from 'react';
import './index.scss';

type Props = {
  icon: ReactElement;
  text: string;
  key: number;
  redirectUrl: string;
};

const NavIcon: React.FC<Props> = ({icon, text, redirectUrl}: Props) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(push(redirectUrl));
  };
  return (
    <div className='icon__container' onClick={handleOnClick}>
      <span className='nav-icon'>{icon}</span>
      <span className='nav-label'>{text}</span>
    </div>
  );
};

export default NavIcon;
