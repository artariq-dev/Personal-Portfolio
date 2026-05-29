import { useRoute } from './lib/router';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const { route } = useRoute();

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
      {route.startsWith('/project/') ? (
        <ProjectDetail />
      ) : (
        <>
          <Hero />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
