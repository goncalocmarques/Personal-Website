import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:projectId" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
