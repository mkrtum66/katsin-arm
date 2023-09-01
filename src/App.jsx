import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  console.log(showSideBar);

  return (
    <div className="App">
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
