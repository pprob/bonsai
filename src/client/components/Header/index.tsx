import React from 'react';
import NavIcon from '../NavIcon';
import {navigationIcons, navigationLinks} from '../../utils/navLinks';
import './index.scss';

const Header: React.FC = () => {
  const navLinksWithIcons = navigationIcons
    .filter(() => true)
    .sort((a, b) => a.order - b.order);
  const navLinksNoIcons = navigationLinks.sort((a, b) => a.order - b.order);

  return (
    <div className='header__container'>
      <div className='header-burger-container'></div>
      <div className='header-navigation-links'>
        <ul>
          {navLinksNoIcons.map((links, index) => (
            <li key={index}>{links.text}</li>
          ))}
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
