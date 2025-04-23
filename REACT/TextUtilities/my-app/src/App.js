import React, { useState , useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Login from './components/Login';
import './App.css';
function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#ccd1dc';
      document.body.style.color = 'black';
    }
  }, [mode]);
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ccd1dc';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <BrowserRouter> {/* Make sure to wrap everything inside BrowserRouter */}
      <Navbar mode={mode} about="About" toggleMode={toggleMode} />
      <Alert alert={alert} onClose={() => setAlert(null)} />

      <div className="container my-3">

        <Routes>
          <Route
            path="/home"
            element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}
          />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
