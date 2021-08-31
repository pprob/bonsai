import React, {useCallback} from 'react';
import './index.scss';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {sliderMenuSelector} from '../../redux/global/selectors';
import {toggleSliderMenu} from '../../redux/global/actions';
import CloseButton from '../CloseButton';
import {sliderLinks, NavLinkConstants} from '../../utils/navLinks';
import NavIcon from '../NavIcon/index';

type Props = {};

const SliderMenu: React.FC<Props> = () => {
  const displaySlider = useAppSelector(sliderMenuSelector);
  const dispatch = useAppDispatch();

  const upperLinks = sliderLinks
    .filter(
      ({sliderMenuFilter}) =>
        sliderMenuFilter === NavLinkConstants.sliderMenuUpper,
    )
    .sort((a, b) => a.order - b.order);

  const lowerLinks = sliderLinks
    .filter(
      ({sliderMenuFilter}) =>
        sliderMenuFilter === NavLinkConstants.sliderMenuLower,
    )
    .sort((a, b) => a.order - b.order);

  const handleCloseSlider = useCallback(() => {
    dispatch(toggleSliderMenu());
  }, [dispatch]);

  return (
    <>
      <div
        className={`slider__container ${displaySlider ? 'show-slider' : ''}`}
      >
        <div className='button_container'>
          <CloseButton handleOnClick={handleCloseSlider} />
        </div>
        <div className='navlinks_container'>
          <div className='upper-links'>
            <ul>
              {upperLinks.map((link, index) => (
                <li key={index}>
                  <NavIcon
                    key={index}
                    icon={link.icon}
                    text={link.text}
                    redirectUrl={link.redirectUrl}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='lower-links'>
            <ul>
              {lowerLinks.map((link, index) => (
                <li key={index}>
                  <NavIcon
                    key={index}
                    icon={link.icon}
                    text={link.text}
                    redirectUrl={link.redirectUrl}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`slider__background ${
          displaySlider ? 'show-background' : ''
        }`}
        onClick={handleCloseSlider}
      ></div>
    </>
  );
};

export default SliderMenu;
