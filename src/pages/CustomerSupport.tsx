import React from "react";

const CustomerSupport: React.FC = () => (
  <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow">
    <h2 className="text-3xl font-bold mb-6">Customer Support</h2>
    <p className="mb-4 text-gray-700">How can we help you? Fill out the form below and our team will get back to you soon.</p>
    <form className="space-y-4">
      <div>
        <label className="block font-semibold mb-1">Subject</label>
        <input className="w-full border rounded px-3 py-2" type="text" placeholder="Subject" />
      </div>
      <div>
        <label className="block font-semibold mb-1">Message</label>
        <textarea className="w-full border rounded px-3 py-2" rows={5} placeholder="Describe your issue or question..." />
      </div>
      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Send</button>
    </form>
  </div>
);

export default CustomerSupport;