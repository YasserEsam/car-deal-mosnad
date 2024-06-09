import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    company: "",
    condition: "",
    year: "",
    seats: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/cars.json")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cars data:", error);
        setLoading(false);
      });
  }, []);

  const filteredCars = cars.filter((car) => {
    return (
      (filters.company === "" || car.company === filters.company) &&
      (filters.condition === "" || car.condition === filters.condition) &&
      (filters.year === "" || car.year.toString() === filters.year) &&
      (filters.seats === "" || car.seats.toString() === filters.seats)
    );
  });

  return (
    <div>
      <Carousel/>
      <Search filters={filters} setFilters={setFilters} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      ) : filteredCars.length > 0 ? (
        <Cars cars={filteredCars} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl font-bold">
            No cars match the selected filters.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
