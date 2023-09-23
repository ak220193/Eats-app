import React from 'react';
import Navbar from './components/Navbar';
import Herobanner from './components/Herobanner';
import Quickdelivery from './components/Quickdelivery';
import Toppics from "./components/Toppics";
import Meal from "./components/Meal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobanner />
      <Quickdelivery />
      <Toppics />
      <Meal />
     
    </div>
  );
}

export default App;
