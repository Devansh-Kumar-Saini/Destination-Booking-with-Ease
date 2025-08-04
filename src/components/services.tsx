import React, { useState } from "react";
import { services } from "../data/services";

const extendedServices = [
  ["Airport Transfers", "Luxury Cars", "Outstation Rides"],
  ["City Tours", "Self Drive", "Corporate Travel"],
  ["Wedding Cars", "Hourly Rentals", "Event Transport"],
  ["Bike Rentals", "Bus/Van Hire", "Custom Packages"],
];

const Services: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section id="services" className="bg-[#cdd7cd] py-16 flex flex-col items-center">
      <h2 className="text-6xl font-bold mb-10 text-center text-gray-800">Our Services</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-3xl shadow-md flex flex-col transition-shadow duration-200 hover:shadow-2xl hover:shadow-gray-500 overflow-hidden"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              {/* Info */}
              <div className="flex flex-col flex-1 px-6 py-5">
                <div className="flex items-center mb-3">
                  <span className="mr-3 text-2xl text-blue-500">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-700 uppercase">{service.name}</h3>
                </div>
                <p className="text-gray-500 text-sm flex-1">{service.description}</p>
                <button className="mt-6 self-end bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-semibold text-sm shadow">
                  More Info
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dropdown Section */}
      <div className="flex justify-center mt-12 w-full">
        <div className="relative w-full max-w-5xl">
          <div
            className="bg-white rounded-3xl shadow-md px-8 py-6 flex items-center cursor-pointer transition hover:shadow-lg"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <span className="flex items-center">
              <span className="inline-block w-10 h-10 rounded-full bg-yellow-200 mr-4"></span>
              <span className="text-2xl md:text-3xl font-bold text-gray-900 mr-4">
                Extended Services
              </span>
            </span>
            <span className="ml-auto text-2xl text-gray-700">
              <span style={{ display: "inline-block", transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>↓</span>
            </span>
          </div>
          {showDropdown && (
            <div className="bg-white rounded-3xl shadow-md mt-2 px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {extendedServices.map((col, idx) => (
                  <ul className="space-y-2" key={idx}>
                    {col.map((item, i) =>
                      item ? (
                        <li key={i}>{item}</li>
                      ) : null
                    )}
                  </ul>
                ))}
                <ul className="space-y-2">
                  <li>
                    <span className="font-bold">Don't see it?</span>{" "}
                    <span className="text-blue-600 font-semibold">Contact us directly</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
