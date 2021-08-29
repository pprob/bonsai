import React from 'react';
import Routes from './Routes';
import Header from '../../components/Header';
import SliderMenu from '../../components/SliderMenu';
import '../../styles/_global.scss';

const App: React.FC = () => (
  <>
    <Header />
    <SliderMenu />
    <Routes />
  </>
);

export default App;
