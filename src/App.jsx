import React from 'react';
import Nav from './assets/components/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './assets/pages/HomePage/Homepage';
import DestinationPage from './assets/pages/DestinationPage/DestinationPage';
import CrewPage from './assets/pages/CrewPage/CrewPage';
import TechnologiesPage from './assets/pages/TechnologyPage/TechnologiesPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;