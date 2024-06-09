import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import CarCard from "../components/CarCard"; 
import ShareButton from "../components/ShareButton"; 

const Details = ({ cars }) => {
  const { carId } = useParams();
  const [showChat, setShowChat] = useState(true);
  const selectedCar = cars.find((car) => car.id === Number(carId));

  if (!selectedCar) {
    return <div>Car not found</div>;
  }

  let AvaColors = selectedCar.avacolors;

  const images = [selectedCar.image, selectedCar.image, selectedCar.image];

  // Filter the other cars from the same owner
  const otherCars = cars.filter((car) =>
    selectedCar.seller.otherCars.includes(car.id)
  );

  const pageUrl = window.location.href;
  const pageTitle = `Check out this car: ${selectedCar.title}`;

  return (
    <div>
      <div className="w-11/12 md:w-4/5 m-auto py-10 flex flex-col md:flex-row justify-between md:space-x-10">
        <div className="md:w-1/2 space-y-5">
          <p className="text-lg">
            <Link to="/">
              Home {">"} Cars {">"}{" "}
            </Link>
            <button
              className="px-4 py-2 flex justify-center items-center rounded-md bg-indigo-500 text-white mt-4"
              onClick={() => setShowChat(true)}
            >
              <span className="text-lg font-bold">Chat</span>
            </button>
            <span className="font-semibold text-indigo-500">Details</span>
          </p>
          <h1 className="text-4xl font-bold">{selectedCar.title}</h1>
          <h3>Car Owner : {selectedCar.seller.name}</h3>
          <h1 className="text-3xl font-bold text-indigo-500">
            ${selectedCar.price}
          </h1>
          <ImageSlider images={images} />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between p-4">
          <div className="py-5 border-b space-y-2">
          <ShareButton url={pageUrl} title={pageTitle} />

            <h1 className="text-2xl font-semibold">
              Specification & Condition
            </h1>
            <div className="flex space-x-5 items-center">
              <div className="flex items-center space-x-1 text-amber-500 list-none">
                <li>{selectedCar.condition} Car - </li>
                <li>{selectedCar.MPG} MPG - </li>
                <li>{selectedCar.gear} Gear - </li>
                <li>has {selectedCar.seats} Seats</li>
              </div>
            </div>
          </div>
          <div className="py-5 border-b space-y-2">
            <h1 className="text-2xl font-semibold">Colors</h1>
            <div className="flex space-x-5 items-center">
              {AvaColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="py-5 border-b space-y-2">
            <h1 className="text-2xl font-semibold">Description</h1>
            <p className="text-sm text-gray-500">{selectedCar.desc}</p>
          </div>
          <div className="py-5 border-b space-y-2 flex justify-between">
            <div>
              <h1 className="md:text-2xl font-semibold">{selectedCar.model}</h1>
              <p>Buy Now</p>
            </div>
            <button className="w-48 px-8 py-2 flex justify-between items-center rounded-md bg-indigo-500 text-white">
              <span className="text-xl font-bold">${selectedCar.price}</span>{" "}
              <span className="p-1 bg-white/20 rounded-lg">
                <IoIosArrowRoundForward size={24} />
              </span>
            </button>
          </div>
        </div>
      </div>
      {showChat && (
        <Chat
          carOwner={selectedCar.seller}
          handleClose={() => setShowChat(false)}
        />
      )}
      <div className="w-11/12 md:w-4/5 m-auto py-10">
        <h2 className="text-3xl font-bold mb-5">
          Other Cars from {selectedCar.seller.name}
        </h2>
        <div className="flex flex-wrap justify-between">
          {otherCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
