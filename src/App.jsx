import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigationType, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP') window.scrollTo(0, 0);
  }, [pathname]); // intentionally excludes navType

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
