import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Socials from './components/socials';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="App">
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
      </Routes>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
