
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import DonateSection from './components/DonateSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';
import TermsPage from './pages/TermsPage';

const HomePage: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <HeroSection />
      <StepsSection />
      <AboutSection />
      <ProjectsSection />
      <DonateSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
    