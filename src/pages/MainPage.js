import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/home/HeroSection';
import MenuSection from '../components/home/MenuSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import LocationsSection from '../components/home/LocationsSection';
import Footer from '../components/common/Footer'; 

export default function MainPage() {
  const [activeSection, setActiveSection] = useState(0);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar scrollTo={scrollTo} />
      <HeroSection />
      <MenuSection />
      <TestimonialsSection />
      <GallerySection />
      <LocationsSection activeSection={activeSection} setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}
