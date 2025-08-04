import React, { useState } from "react";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";

interface Activity {
  title: string;
  images: string[];
  subtitle: string;
  details: string;
  description: string;
  price: string;
}

const getCart = (): Activity[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Activity[]>(getCart());
  const [showPortal, setShowPortal] = useState(false);
  const [paid, setPaid] = useState(false);

  // GST and Platform Fee rates
  const GST_RATE = 0.18; // 18% GST
  const PLATFORM_FEE = 2.5; // Flat platform fee in £

  React.useEffect(() => {
    const handleStorage = () => setCart(getCart());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleRemove = (idx: number) => {
    const updated = cart.filter((_, i) => i !== idx);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, "")), 0);
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst + PLATFORM_FEE;

  const handleCheckout = () => setShowPortal(true);

  const handlePayment = () => {
    setPaid(true);
    setShowPortal(false);
    generatePDF();
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const generatePDF = () => {
  const doc = new jsPDF();

  // Styles
  const lineHeight = 10;
  let y = 20;

  // Header
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("CarSe-Chalo Receipt", 10, y);
  y += lineHeight;

  // Date
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  const now = new Date();
  doc.text(`Date: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`, 10, y);
  y += lineHeight;

  // Divider
  doc.setDrawColor(150);
  doc.line(10, y, 200, y);
  y += lineHeight;

  // Activities list
  cart.forEach((item, idx) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${idx + 1}. ${item.title}`, 10, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text(`    ${item.subtitle} | ${item.details}`, 10, y);
    y += 6;
    doc.text(`    ₹${item.price}`, 10, y);
    y += lineHeight;
  });

  // Divider before summary
  doc.line(10, y, 200, y);
  y += lineHeight;

  // Summary
  doc.setFont("helvetica", "bold");
  doc.text(`Subtotal: ₹${subtotal.toFixed(2)}`, 10, y);
  y += lineHeight;
  doc.text(`GST (18%): ₹${gst.toFixed(2)}`, 10, y);
  y += lineHeight;
  doc.text(`Platform Fee: ₹${PLATFORM_FEE.toFixed(2)}`, 10, y);
  y += lineHeight;

  doc.setFontSize(13);
  doc.setTextColor(0, 102, 51); // greenish
  doc.text(`Total: ₹${total.toFixed(2)}`, 10, y);

  // Save
  doc.save("CarSe-Chalo-Receipt.pdf");
};


  if (cart.length === 0 && !paid) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#FFF6F3]">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart is Empty</h2>
          <p className="text-gray-500">Add some activities to your cart!</p>
          <Link
         to="/"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
>
  Browse Activities
</Link>

        </div>
      </section>
    );
  }

  if (paid) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#FFF6F3]">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Payment Successful!</h2>
          <p className="text-gray-500 mb-4">Your receipt has been downloaded.</p>
          <Link
            to="/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <header className="sticky top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white/10 backdrop-blur-md shadow-none z-40">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
            alt="CarSe-Chalo Logo"
            className="w-10 h-10 object-contain mr-2"
          />
          <span className="ml-2 text-3xl md:text-4xl flex items-center font-sans">
            <span className="font-black text-gray-900">CarSe</span>
            <span className="font-normal text-gray-900">-Chalo</span>
          </span>
        </div>
        <nav className="flex items-center gap-1">
          <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium px-3 py-1 rounded hover:bg-blue-100 transition-colors duration-200">
            HOME
          </Link>
        </nav>
      </header>
      <section className="min-h-screen bg-[#FFF6F3] py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Basket */}
          <div className="flex-1 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Your Basket</h2>
            <div className="space-y-6">
              {cart.map((activity, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-4 border-b pb-4">
                  <img
                    src={activity.images[0]}
                    alt={activity.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">{activity.title}</h3>
                    <div className="text-xs text-purple-700 font-semibold">{activity.subtitle}</div>
                    <div className="text-xs text-gray-500">{activity.details}</div>
                    <div className="text-sm text-gray-600">{activity.description}</div>
                    <div className="font-bold text-indigo-700 mt-2">{activity.price}</div>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md text-xs font-semibold"
                    onClick={() => handleRemove(idx)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Checkout */}
          <div className="w-full md:w-96 bg-white rounded-3xl shadow-lg p-8 h-fit">
            {/* Removed delivery options */}
            <div className="mb-2 flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="mb-2 flex justify-between text-gray-700">
              <span>GST (18%):</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="mb-2 flex justify-between text-gray-700">
              <span>Platform Fee:</span>
              <span>₹{PLATFORM_FEE.toFixed(2)}</span>
            </div>
            <div className="mb-6 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
              className="bg-green-500 text-white w-full py-3 rounded-md font-semibold text-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <Link
              to="/"
              className="mt-3 bg-blue-500 text-white w-full py-3 rounded-md font-semibold text-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            >
              Add more activities
            </Link>
            <div className="text-xs text-gray-400 mt-2">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>
          </div>
        </div>
        {/* Dummy Payment Portal */}
        {showPortal && (
  <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Payment Portal</h3>

      <label className="block text-left mb-2 font-medium text-gray-700">Select Payment Method:</label>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded-md"
      >
        <option value="upi">UPI</option>
        <option value="card">Debit/Credit Card</option>
        <option value="paytm">Paytm Wallet</option>
      </select>

      {/* Dynamic Inputs */}
      {paymentMethod === "upi" && (
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />
      )}
      {paymentMethod === "card" && (
        <>
          <input
            type="text"
            placeholder="Card Number"
            maxLength={16}
            className="w-full mb-2 px-4 py-2 border rounded-md"
          />
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <input 
              type="text"
              placeholder="CVV"
              maxLength={3}
              className="w-16 h-10 border border-gray-300 rounded-md text-center text-sm"
            />
          </div>
          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />
        </>
      )}
      {paymentMethod === "paytm" && (
        <input
          type="text"
          placeholder="Paytm Mobile Number"
          maxLength={10}
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />
      )}

      <button
        className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold w-full"
        onClick={handlePayment}
      >
        Confirm Payment of ₹{total.toFixed(2)}
      </button>
      <button
        className="mt-4 text-gray-500 underline"
        onClick={() => setShowPortal(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}
      </section>
    </>
  );
};

export default Cart;