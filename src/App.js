import React from 'react';
import Navbar from './components/Navbar';
import Herobanner from './components/Herobanner';
import Quickdelivery from './components/Quickdelivery';
import Toppics from "./components/Toppics";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobanner />
      <Quickdelivery />
      <Toppics />
      <Meal />
      <Categories />
      <Newsletter />
      <Footer />
     
    </div>
  );
}

export default App;
