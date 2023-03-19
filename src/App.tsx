import './App.css';
import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Header from './components/header/header';
import AboutUs from './pages/aboutUs/aboutUs-page';
import Main from './pages/main/main-page';
import Error from './pages/error/error-page';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
