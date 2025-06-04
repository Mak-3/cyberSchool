import React from "react";

const events = [
  {
    title: "International Women’s Day Event – Accelerate Action",
    date: "10 Mar 2025",
    day: "10",
    month: "Mar",
    image: "/images/womens-day.jpg", // Replace with actual image paths
  },
  {
    title: "Scholarships & Payment Plans",
    date: "19 Mar 2025",
    day: "19",
    month: "Mar",
    image: "/images/scholarships.jpg",
  },
];

export default function TrainingEvents() {
  return (
    <div className="bg-white px-6 py-10">
      <h2 className="text-xl font-semibold mb-6">Calendar & Events</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded overflow-hidden"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-[-1.5rem] left-4 bg-white px-4 py-2 shadow-md rounded text-center">
                <p className="text-sm font-semibold text-gray-500">{event.month}</p>
                <p className="text-xl font-bold text-gray-800">{event.day}</p>
              </div>
            </div>
            <div className="bg-[#001e62] text-white pt-8 pb-4 px-4 mt-6 rounded-t-none">
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-sm opacity-80">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
