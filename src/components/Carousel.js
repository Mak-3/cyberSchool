import React, { useState, useEffect } from "react";
import image1 from "../assets/images/carouselImage1.jpg";
import image2 from "../assets/images/carouselImage2.jpg";
import image3 from "../assets/images/carouselImage3.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  FaUniversity,
  FaGraduationCap,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: image1,
      title: "Welcome to CyberSchool",
      description:
        "Empowering future innovators with cutting-edge technology education.",
    },
    {
      src: image2,
      title: "Learn Cybersecurity",
      description:
        "Master the skills to protect digital infrastructure in a connected world.",
    },
    {
      src: image3,
      title: "Join Our Community",
      description:
        "Collaborate, learn, and grow with like-minded tech enthusiasts worldwide.",
    },
  ];

  const autoSlide = true;
  const autoSlideInterval = 5000;

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full md:h-[90vh] h-[40vh] mx-auto overflow-hidden">
      <div className="relative h-full flex">
        {images.map(({ src, title, description }, index) => {
          const offset = index - currentIndex;

          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${offset * 100}%)` }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-3xl md:text-6xl font-bold drop-shadow-lg">
                  {title}
                </h2>
                <p className="mt-8 md:text-lg drop-shadow-md max-w-xl">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="absolute top-1/2 left-6 md:left-12 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FiChevronRight size={24} />
      </button>

      <div className="hidden md:flex absolute bottom-16 left-0 right-0 justify-center gap-6 py-8 mx-auto max-w-4xl rounded-lg shadow-lg z-20">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#001e62] flex items-center justify-center text-3xl text-gray-400">
            <FaUniversity />
          </div>
          <p className="mt-2 text-gray-200 font-semibold">ACADEMY</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#001e62] flex items-center justify-center text-3xl text-gray-400">
            <FaGraduationCap />
          </div>
          <p className="mt-2 text-gray-200 font-semibold">ADMISSION</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#001e62] flex items-center justify-center text-3xl text-gray-400">
            <FaBook />
          </div>
          <Link to="/courses/certified-cyber-expert" className="mt-2 text-gray-200 font-semibold">COURSES</Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#001e62] flex items-center justify-center text-3xl text-gray-400">
            <FaCalendarAlt />
          </div>
          <p className="mt-2 text-gray-200 font-semibold">SEMINAR</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
