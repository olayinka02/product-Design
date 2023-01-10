import React from 'react';

// import {Circle2} from 'react-preloaders';

import AnimatedCursor from "react-animated-cursor";
import HeroSection from './components/HeroSection';
import NavbarHeader from './components/NavbarHeader';






function App() {
  return (
    <div className="App">
        <NavbarHeader />
      <HeroSection />
    
      
    
      
     
    
     
    
      <AnimatedCursor
      innerSize={5}
      outerSize={36}
      color='95,95,95'
      outerAlpha={0.25}
      innerScale={0.7}
      outerScale={1.5}
      outerStyle={{  border: '1.5px solid #4A4A4A' }}
      innerStyle={{  border: '2px solid #4A4A4A' }}
      trailingSpeed={10}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  
  );
}

export default App;
