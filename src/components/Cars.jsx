import React from "react";
import CarCard from "./CarCard";

const Cars = ({ cars }) => {
  return (
    <div className="w-11/12 md:w-5/5 m-auto">
      <div className="py-10 grid  md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 justify-items-center gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
