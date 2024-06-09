import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Search = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center py-10">
      <div className="flex items-center space-x-8 bg-gray-50 p-5 rounded-full">
        <div className="flex items-center space-x-5">
          <FaLocationDot />
          <select
            name="company"
            className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200"
            onChange={handleFilterChange}
          >
            <option value="">Select Vendor</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Audi">Audi</option>
          </select>
        </div>
        <div>
          <select
            name="condition"
            className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200"
            onChange={handleFilterChange}
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <div>
          <select
            name="year"
            className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200"
            onChange={handleFilterChange}
          >
            <option value="">Select Year</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
        <div>
          <select
            name="seats"
            className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200"
            onChange={handleFilterChange}
          >
            <option value="">Select Seats</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
