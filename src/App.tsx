import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Theme } from '@k2/utils';

function App() {
  return (
    <div className="App">
      <header className="App-main-header">K2 Dashboard</header>
      <div className="App-main-body">
        <Theme.ThemeProvider>
          <Dashboard />
        </Theme.ThemeProvider>
      </div>
    </div>
  );
}

export default App;
