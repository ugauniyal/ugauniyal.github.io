import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { AllProjects } from './components/AllProjects';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToProjects = () => {
    setCurrentPage('projects');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar 
        onNavigateHome={navigateToHome} 
        currentPage={currentPage} 
      />
      <main className="container">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Stats />
            <Projects onViewAll={navigateToProjects} />
            <Reviews />
            <Services />
          </>
        ) : (
          <AllProjects onBackToHome={navigateToHome} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
