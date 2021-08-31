/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import NavIcon from '../NavIcon';
import HamBurgerMenu from '../HamburgerMenu';
import {navigationIcons, navigationLinks} from '../../utils/navLinks';
import {push} from 'connected-react-router';
import './index.scss';
import {useDispatch} from 'react-redux';
// import * as ZenLifeLogo from '../../assets/images/ZenLifeLogo.png';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navLinksWithIcons = navigationIcons
    .filter(() => true)
    .sort((a, b) => a.order! - b.order!);
  const navLinksNoIcons = navigationLinks.sort((a, b) => a.order - b.order);

  return (
    <div className='header__container'>
      <div className='header-burger-container'>
        <HamBurgerMenu />
        <div className='logo-container'>
          {/* <img src={ZenLifeLogo} alt='logo image' /> */}
        </div>
      </div>
      <div className='header-navigation-links'>
        <ul>
          {navLinksNoIcons.map((links, index) => {
            const handleOnClick = () => {
              return dispatch(push(links.redirectUrl));
            };

            return (
              <li key={index} onClick={handleOnClick}>
                {links.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='header-navigation-icons'>
        {navLinksWithIcons.map((data, index) => {
          const {icon, text, redirectUrl} = data;

          return (
            <NavIcon
              icon={icon}
              text={text}
              key={index}
              redirectUrl={redirectUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
