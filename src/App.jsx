import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import AllCars from './pages/AllCars';
import ScrollToTop from './ScrollToTop';
import  Navbar from './components/Navbar';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/data/cars.json')
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching cars data:', error));
  }, []);

  return (
    <BrowserRouter>
     <ScrollToTop />
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home cars={cars} />} />
        <Route path="/allcars" element={<AllCars/>} />
        <Route path="/details/:carId" element={<Details cars={cars} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
