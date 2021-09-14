import React from 'react';
import Routes from './Routes';
import Header from '../../components/Header';
import SliderMenu from '../../components/SliderMenu';
import Loader from '../../components/Loader';
import '../../styles/_global.scss';

const App: React.FC = () => (
  <>
    <Loader />
    <Header />
    <SliderMenu />
    <Routes />
  </>
);

export default App;
