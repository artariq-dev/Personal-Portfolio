import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.getElementById(hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' }), 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Hero /><Projects /></>} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!pathname.startsWith('/project/') && <Footer />}
    </div>
  );
}

export default App;
