import { useState } from "react";
import { GiSteeringWheel, GiCarSeat } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={`/details/${car.id}`}>
      <div className="border p-1 rounded-2xl">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[300px] z-0 p-5 bg-gray-100 space-y-4 rounded-2xl"
        >
          <h1 className="text-2xl font-bold">{car.title}</h1>
          <h1 className="flex items-start">
            <span>$</span>
            <span className="text-3xl font-bold">{car.price}</span>
          </h1>
          <img src={car.image} alt={car.model} />
          {isHovered ? (
            <button className="w-full p-3 bg-indigo-600/80 text-white rounded-lg">
              More Details
            </button>
          ) : (
            <div className="flex justify-between">
              <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
                <GiSteeringWheel size={26} />
                <p>{car.gear}</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
                <GiCarSeat size={26} />
                <p>{car.seats} seats</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
                <FaGasPump size={26} />
                <p>{car.MPG} MPG</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
