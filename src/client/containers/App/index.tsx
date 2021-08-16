import React from 'react';
import Routes from './Routes';
import Header from '../../components/Header';
import '../../styles/_global.scss';

const App: React.FC = () => (
  <>
    <Header />
    <Routes />
  </>
);

export default App;
