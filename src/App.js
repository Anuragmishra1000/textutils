// import logo from './logo.svg';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#08070e'
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

    }
  }
  return (

    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
    // <Router>
    // <Routes>

    // <Route exact path="/" element={
    // <React.Fragment>

    // </React.Fragment>} />

    // <Route exact path="/about" element={<About />} />
    // </Routes>
    // </Router>

  );
}

export default App;
