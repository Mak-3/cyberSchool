import React from "react";
import image1 from "../assets/images/carouselImage1.jpg";

const WorkWithUs = () => {
  return (
    <div className="bg-white px-6 py-12 md:py-20 lg:px-20 max-w-7xl mx-auto">
      <span className="inline-block bg-blue-200 text-[#001e62] text-sm font-medium px-3 py-1 rounded-full">
        Work with us
      </span>
      <div className="relative px-4 py-12 lg:px-0 flex justify-center">
        <div className="relative w-full">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/3 overflow-hidden rounded-lg shadow-md">
              <img
                src={image1}
                alt="LBS Team"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-[1.1]"
              />
            </div>

            <div className="hidden lg:block w-1/3"></div>

            <div className="md:absolute top-1/2 right-0 md:transform md:-translate-y-1/2 bg-[#00205B] text-white p-8 lg:p-12 w-full lg:w-1/2 shadow-lg rounded-lg">
              <span className="text-sm mb-2 block">Jobs at CyberSchool</span>
              <h2 className="text-3xl font-bold leading-snug mb-4">
                Interested in <br />
                working at CyberSchool?
              </h2>
              <p className="text-base mb-6">
                Take your next step on the career ladder with us.
              </p>
              <button className="bg-white text-[#00205B] font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
