import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { useDarkMode } from './useDarkMode';
import Toggle from './toggle';
import styles from './App.css';

console.log(styles);


function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // The function that toggles between themes


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
      <footer>
        <span>Credits:</span>
        <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
        <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
      </footer>
    </ThemeProvider>
  )
}

export default App;