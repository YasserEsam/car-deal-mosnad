import React, { useEffect, useState, useRef } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="carousel h-screen w-full overflow-hidden relative ">
      <div className="list w-full h-full ">
        {images.map((img, index) => ( 
          <div
            className={`item absolute inset-0 transition-opacity duration-500 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            key={index}
          >
            <div className="dark-layer absolute inset-0 bg-black opacity-50"></div>
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`slide ${index + 1}`}
            />
            <div className="content absolute top-1/4 w-11/12 max-w-4xl left-1/2 transform -translate-x-1/2 pr-1/3 text-white text-shadow-lg">
              <div className="author font-bold tracking-widest">Mosnad</div>
              <div className="title text-5xl font-bold leading-tight mt-4">
                Hit the road
              </div>
              <div className="topic text-5xl font-bold leading-tight text-orange-600 mt-4">
                with Ur Car
              </div>
              <div className="des mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat...
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
