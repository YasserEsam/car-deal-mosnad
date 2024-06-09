import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-100 sticky top-0 z-40 py-4">
      <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-bold text-black">BuyCar</h1>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            ☰
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-y-2 md:space-y-0 md:space-x-5 text-sm font-semibold text-black absolute md:static bg-blue-100 w-full md:w-auto top-12 left-0 md:top-0 mt-5`}
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <li className="p-2 md:p-0">Home</li>
          </Link>
          <Link to="/allcars" onClick={() => setIsMenuOpen(false)}>
            <li className="p-2 md:p-0">Cars</li>
          </Link>
        </ul>
       
      </div>
     
    </div>
  );
};

export default Navbar;
