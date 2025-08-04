import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

type BookingFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  departureDate: string;
  departureTime: string;
  returnDate: string;
  returnTime: string;
  passengers: string;
  verification: boolean;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BookingForm: React.FC = () => {
  const [form, setForm] = useState<BookingFormType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    departureDate: "",
    departureTime: "",
    returnDate: "",
    returnTime: "",
    passengers: "",
    verification: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.verification) {
      alert("Please verify you are not a robot.");
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          to_email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          departureDate: form.departureDate,
          departureTime: form.departureTime,
          returnDate: form.returnDate,
          returnTime: form.returnTime,
          passengers: form.passengers,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      alert("✅ Booking submitted! Confirmation email sent.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        departureDate: "",
        departureTime: "",
        returnDate: "",
        returnTime: "",
        passengers: "",
        verification: false,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send confirmation email. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-[#ccd7cd] p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full max-w-6xl mx-auto relative flex-col md:flex-row items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-1 items-center justify-center relative"
        >
          <img
            src="images/booknow.png"
            alt="Booking Visual"
            className="w-100 h-[28rem] object-cover rounded-3xl shadow-2xl border-4 border-white"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          method="post"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-2xl z-20 border border-gray-200 ml-auto"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-[#221d53] mb-6 text-center"
          >
            BOOK YOUR RIDE
          </motion.h2>

          {/* Name */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1 text-left">
                Name<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First*"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last*"
                  value={form.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1 text-left">
              Email for booking confirmation<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-300"
            />
            <span className="text-xs text-gray-400">
              We will send you a copy of the completed booking form to your e-mail address.
            </span>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1 text-left">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="#####-######"
                maxLength={10}
                value={form.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </motion.div>

          {/* Dates */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1 text-left">
                Departure Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="departureDate"
                value={form.departureDate}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1 text-left">
                Return Date
              </label>
              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </motion.div>

          {/* Times */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1 text-left">
                Departure Time<span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                name="departureTime"
                value={form.departureTime}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1 text-left">
                Return Time<span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                name="returnTime"
                value={form.returnTime}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </motion.div>

          {/* Passengers */}
          <motion.div variants={itemVariants} className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1 text-left">
              Number of passengers<span className="text-red-500">*</span>
            </label>
            <select
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-300"
            >
              <option value="">*Please Select*</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </motion.div>

          {/* Verification */}
          <motion.div variants={itemVariants} className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1 text-left">
              Verification<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="verification"
                checked={form.verification}
                onChange={handleChange}
                required
                className="w-5 h-5 accent-blue-500"
              />
              <span className="text-gray-600 text-sm">I'm not a robot</span>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={!form.verification}
              className={`w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition mt-4 text-lg shadow-lg tracking-wide ${
                !form.verification ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              BOOK
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default BookingForm;