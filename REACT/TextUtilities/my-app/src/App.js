
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { ThemeProvider, ThemeToggle } from './components/ThemeProvider';


function App() {
  return (
    <>
       <ThemeProvider>
      <div className="App" style={{ textAlign: 'center', padding: '40px' }}>
        <Navbar title="TEXTUTILS" about="About Text" />
        <div className="container my-3">
          <TextForm heading="Enter text to analyze" />
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
      
    </>

  );
}

export default App;
