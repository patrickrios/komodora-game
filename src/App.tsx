import React from 'react';
import './App.css'
import AppProvider from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { KomodoraPresskit } from './pages/komodora_presskit/PressKit';
import { TabsProvider } from './contexts/TabsContext';

const  App = () =>{
  return(
    <AppProvider>
      <ThemeProvider>
        <TabsProvider>
          <KomodoraPresskit/>
        </TabsProvider>
      </ThemeProvider>
    </AppProvider>
  )
};

export default App;
