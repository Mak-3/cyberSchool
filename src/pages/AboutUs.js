import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white px-6 py-12 md:py-20 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-blue-200 text-[#001e62] text-sm font-medium px-3 py-1 rounded-full">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Empowering the Next Generation of Digital Learners
          </h1>
          <p className="text-gray-600 text-lg">
            CyberSchool is a modern online learning platform designed to make
            quality education accessible to students around the globe. From
            coding bootcamps to soft skills training, we deliver engaging,
            interactive, and career-oriented learning experiences.
          </p>
          <p className="text-gray-600 text-lg">
            CyberSchool is a modern online learning platform designed to make
            quality education accessible to students around the globe. From
            coding bootcamps to soft skills training, we deliver engaging,
            interactive, and career-oriented learning experiences.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10">
            <div>
              <p className="text-xl font-bold text-[#001e62]">1.2M+</p>
              <p className="text-gray-600">Enrollments</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#001e62]">800K+</p>
              <p className="text-gray-600">Active Learners</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#001e62]">4.8</p>
              <p className="text-gray-600">App Rating</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#001e62]">150+</p>
              <p className="text-gray-600">Instructors</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="CyberSchool Learning"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="p-6 rounded-xl border">
          <div className="text-lg font-semibold mb-2">
            Why Choose CyberSchool?
          </div>
          <p className="text-gray-600">
            Our platform offers hands-on courses, real-world projects, and
            mentorship from industry experts to prepare learners for the future.
          </p>
        </div>
        <div className="p-6 rounded-xl border">
          <div className="text-lg font-semibold mb-2">Our Vision</div>
          <p className="text-gray-600">
            To bridge the global education gap by making digital learning
            engaging, affordable, and accessible to everyone.
          </p>
        </div>
        <div className="p-6 rounded-xl border">
          <div className="text-lg font-semibold mb-2">Our Mission</div>
          <p className="text-gray-600">
            Our mission is to equip learners with the tools and confidence they
            need to thrive in an ever-evolving digital world. We foster a
            vibrant global community where students can collaborate, share
            ideas, and grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
