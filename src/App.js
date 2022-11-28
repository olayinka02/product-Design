import logo from './logo.svg';
import './App.css';

import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AnimatedCursor
      innerSize={9}
      outerSize={12}
      color='0, 0,0'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={7}
      outerStyle={{  border: '3px solid #fff' }}
      innerStyle={{  border: '3px solid #fff' }}
      trailingSpeed={9}
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
