import React from 'react';

// import {Circle2} from 'react-preloaders';

import AnimatedCursor from "react-animated-cursor";
import HeroSection from './components/HeroSection';

import { ParallaxProvider } from 'react-scroll-parallax';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <ParallaxProvider>
      <HeroSection />
      <AboutUs />
      </ParallaxProvider>
      
     
    
     
    
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
