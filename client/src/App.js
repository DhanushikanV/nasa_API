import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PicOfDay from './components/picOfDay';
import NavBar from './components/navBar';
import SignUpForm from './components/signUpForm';
import LogIn from './components/login';
import MarsRovPhoto from './components/marsRovPhotos'
import './App.css';
import Asteroid from './components/asteroid';

// Separate component for layout with NavBar
function AppLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
       
        <Route
          path="/PicOfDay"
          element={<AppLayout><PicOfDay /></AppLayout>}
        />

        <Route
          path="/Asteroid"
          element={<AppLayout><Asteroid /></AppLayout>}
        />

        <Route
          path="/MarsRovPhotos"
          element={<AppLayout><MarsRovPhoto/></AppLayout>}
        />
        
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<LogIn />} />
        
      </Routes>
    </Router>
  );
}

export default App;

