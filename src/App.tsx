import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Theme } from '@k2/utils';

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <Theme.ThemeProvider>
        <Dashboard />
      </Theme.ThemeProvider>
    </div>
  );
}

export default App;
