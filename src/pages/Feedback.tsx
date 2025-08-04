import React from "react";

const Feedback: React.FC = () => (
  <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow">
    <h2 className="text-3xl font-bold mb-6">Feedback</h2>
    <p className="mb-4 text-gray-700">We value your feedback! Please let us know your thoughts below.</p>
    <form className="space-y-4">
      <div>
        <label className="block font-semibold mb-1">Your Feedback</label>
        <textarea className="w-full border rounded px-3 py-2" rows={5} placeholder="Type your feedback here..." />
      </div>
      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  </div>
);

export default Feedback;