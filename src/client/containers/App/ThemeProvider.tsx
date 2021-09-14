import React, {createContext, useState, useContext} from 'react';
import {Themes} from '../../redux/global/enums';

export const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({children}: Props) => {
  const [theme, setTheme] = useState(Themes.Light);

  const setAppTheme = () => {
    if (theme === Themes.Light) {
      setTheme(Themes.Dark);
    } else {
      setTheme(Themes.Light);
    }
  };

  return (
    <ThemeContext.Provider value={{theme, setAppTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
