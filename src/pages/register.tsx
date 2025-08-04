import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EmailIcon, UserIcon, PhoneIcon , LockIcon} from "../components/Icons";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "", // Add this
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      // Save all user details to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          contact: form.contact,
        })
      );
      alert("Registered successfully!");
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/register-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700 via-blue-500 to-blue-300 opacity-30"></div>

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full flex justify-end items-center px-8 py-4 z-20">
        <Link
          to="/"
          className="text-white font-semibold mr-6 hover:underline transition"
        >
          HOME
        </Link>
        <Link
          to="/login"
          className="text-white font-semibold hover:underline transition"
        >
          LOGIN
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full h-screen items-center justify-end px-8">
        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-95 p-8 rounded shadow-lg w-full max-w-md flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold mb-1">Sign up now</h2>
          <p className="text-gray-500 mb-4 text-sm">
            Register and get access to exclusive features and offers.
          </p>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
              <UserIcon />
            </span>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
              <UserIcon />
            </span>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
              <EmailIcon />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
              <PhoneIcon />
            </span>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              maxLength={10}
              value={form.contact}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
              <LockIcon />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By signing up to our service, you agree to our{" "}
            <a
              href="https://www.w3docs.com/privacy-policy"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions and Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full font-semibold mt-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;