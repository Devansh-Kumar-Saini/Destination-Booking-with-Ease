import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Adventure Tours",
    subtitle: "Thrilling Escapades",
  },
  {
    title: "Cultural Immersions",
    subtitle: "Embracing Local Traditions",
  },
  {
    title: "Off-the-Beaten-Path Journeys",
    subtitle: "Exploring Hidden Gems",
  },
];

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const About: React.FC = () => (
  <div className="min-h-screen bg-[#3B5947] py-16 px-6 md:px-12 flex justify-start">
    <div className="w-full max-w-5xl text-left">
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
        Travel Experiences
      </h1>
      <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mr-auto">
        At CarSe-Chalo, we make your travel dreams a reality.
        From breathtaking adventure tours to immersive cultural experiences, we offer a wide range of travel services designed to cater to every type of traveler. Our team is dedicated to providing exceptional service and creating unforgettable memories for you and your loved ones. 
        Whether you need a ride from the airport, a car rental, or a complete travel package, our mission is to make every journey smooth, safe, and memorable.
      </p>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {features.map((feature, idx) => (
          <motion.div key={feature.title} variants={featureVariants}>
            {idx !== -1 && <hr className="border-white mb-8" />}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline w-full">
              <span className="text-2xl md:text-3xl text-white font-medium">
                {feature.title}
              </span>
        
              <span className="text-lg md:text-xl text-white font-semibold mt-4 md:mt-0 text-right md:text-left">
                {feature.subtitle}
              </span>
            </div>
          </motion.div>
        ))}
        <hr className="border-white mt-8" />
      </motion.div>
    </div>
  </div>
);

export default About;
