import React from 'react';
import Navbar from './components/Navbar';
import Herobanner from './components/Herobanner';
import Quickdelivery from './components/Quickdelivery';
import Toppics from "./components/Toppics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobanner />
      <Quickdelivery />
      <Toppics />
     
    </div>
  );
}

export default App;
