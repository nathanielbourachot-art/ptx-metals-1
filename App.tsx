import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MarketTrends from './components/MarketTrends';
import Investors from './components/Investors';
import News from './components/News';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import SectionBlueprint from './components/SectionBlueprint';
import { Leaf } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-ptx-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <MarketTrends />
        <Investors />
        
        {/* New Section using the Blueprint */}
        <SectionBlueprint 
          id="community"
          title="Committed to Responsible"
          highlight="Exploration & Stewardship"
          description="We believe that successful mining starts with strong community partnerships and rigorous environmental standards. Our commitment to sustainability ensures that we build value not just for shareholders, but for the land and people of Northern Ontario."
          image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2500"
          badge="Community & Environment"
          primaryAction={{ label: "Our ESG Framework", href: "#esg" }}
          secondaryAction={{ label: "Community Initiatives", href: "#community", icon: <Leaf size={18} /> }}
        />
        
        <News />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
