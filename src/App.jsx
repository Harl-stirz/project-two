
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Recruit from './components/Recruit';
import Opp from './components/Opp';
import Footer from './components/Footer';
import JobPage from './components/Job';
import About from './components/About';
import Case from './components/Case';
import Service from './components/Services';

function Home() {
  return (
    <>
      <Hero />
      <Recruit />
      <Opp />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-job" element={<JobPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/case-studies" element={<Case />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
