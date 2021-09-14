import React, {VFC} from 'react';
import Lottie from 'react-lottie';
import {useAppSelector} from '../../hooks/redux';
import {loadingStateSelector} from '../../redux/global/selectors';
import lottie from '../../assets/animations/lottie.json';
import './index.scss';

type Props = {};

const Loader: VFC<Props> = () => {
  const isLoading = useAppSelector(loadingStateSelector);
  console.log(isLoading);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
  };

  if (!isLoading) {
    return null;
  }

  return (
    <div className='loader__container'>
      <div className='loader-content'>
        <Lottie options={lottieOptions} />
      </div>
    </div>
  );
};

export default Loader;
