
import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero'
import Service from './components/UI/Service';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';



function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Service/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
