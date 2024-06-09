import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import Search from "../components/Search";

function AllCars() {
  const [show, setShow] = useState(false);
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    company: "",
    condition: "",
    year: "",
    seats: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCars = localStorage.getItem('cars');
    if (savedCars) {
      setCars(JSON.parse(savedCars));
      setLoading(false);
    } else {
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
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (newCar) => {
    const newId = cars.length ? cars[cars.length - 1].id + 1 : 1;
    const carOwnerIndex = cars.findIndex(car => car.seller.name === newCar.sellerName);
    const carOwner = carOwnerIndex !== -1 ? cars[carOwnerIndex].seller : {
      name: newCar.sellerName,
      contact: newCar.sellerContact,
      otherCars: [],
    };

    const newCarData = {
      ...newCar,
      id: newId,
      price: parseFloat(newCar.price),
      year: parseInt(newCar.year),
      MPG: parseFloat(newCar.MPG),
      seats: parseInt(newCar.seats),
      avacolors: newCar.avacolors,
      images: newCar.images,
      seller: carOwner,
    };

    const updatedCars = [...cars, newCarData];
    setCars(updatedCars);

    if (carOwnerIndex !== -1) {
      updatedCars[carOwnerIndex].seller.otherCars.push(newId);
    } else {
      newCarData.seller.otherCars.push(newId);
    }

    localStorage.setItem('cars', JSON.stringify(updatedCars));

    handleClose();
  };

  const filteredCars = cars.filter((car) => {
    return (
      (filters.company === "" || car.company === filters.company) &&
      (filters.condition === "" || car.condition === filters.condition) &&
      (filters.year === "" || car.year.toString() === filters.year) &&
      (filters.seats === "" || car.seats.toString() === filters.seats)
    );
  });

  return (
    <>

      <div className="flex justify-center mt-5">
        <button onClick={handleShow} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          + Add a New Car
        </button>
      </div>
      <Search filters={filters} setFilters={setFilters} />
      <Modal show={show} handleClose={handleClose} title="Add New Car" handleSave={handleSave} />
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
    </>
  );
}

export default AllCars;
