import React, { useState } from "react";

const activities = [
  {
    title: "Highlights Of Palampur",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Day Trips & Excursions",
    details: "6 Places | 8 Activity",
    description: "Perfect Day Around Palampur: Nature, Culture & Adventure Reconnect with your loved ones.",
    price: "INR 2600.00",
  },
  {
    title: "Shakti Peeths & Forts Of Kangra",
    images: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Day Trips & Excursions",
    details: "5 Places | 8 Activity",
    description: "Spiritual & Historical Himachal Day Trip along Shakti Peeth Tour with Itinerary.",
    price: "INR 2600.00",
  },
  {
    title: "Best Of Himachal (Ex Chandigarh) 8 Nights / 9 Days",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Mountain Holidays, Tours & Holidays",
    details: "6 Places | 8 Activity",
    description: "Explore Himachal for 8 Days Starting from Chandigarh! Embark on a breathtaking journey.",
    price: "INR 32600.00",
  },
  {
    title: "Kullu Manali Adventure Package with 4* Resort Stay (Ex Chandigarh)",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Mountain Holidays, Tours & Holidays",
    details: "6 Places | 8 Activities",
    description: "Thrilling Kullu Manali Tour Package: An Unforgettable Getaway For Couples & Explorers.",
    price: "INR 17249.00",
  },
  {
    title: "Bir – Paragliding, Baijnath Temple, Andretta Pottery",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Day Trips & Excursions",
    details: "6 Places | 8 Activity",
    description: "Exciting Day Trip near Dharamshala with Paragliding in Bir, Culture & Art Escape the ordinary.",
    price: "INR 4800.00",
  },
  {
    title: "Little Lhasa – Dharamshala",
    images: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Day Trips & Excursions",
    details: "6 Places | 8 Activity",
    description: "Day trip near Dharamshala and Palampur – This trip is suitable for those looking taste the...",
    price: "INR 2500.00",
  },
  {
    title: "Weekend Mountain Getaways – Manali (2 Nights / 3 Days)",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Mountain Holidays, Tours & Holidays",
    details: "6 Places | 8 Activities",
    description: "Best 2 Nights Manali Tour Package 2025 – The ultimate weekend getaway! Manali looking for...",
    price: "INR 7000.00",
  },
  {
    title: "Best Of Palampur",
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Day Trips & Excursions",
    details: "6 Places | 8 Activity",
    description: "Unwind with the perfect Day trip near Palampur: Nature, Food & Adventure Stay your way.",
    price: "INR 1850.00",
  },
  {
    title: "Palampur & Around",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ],
    subtitle: "Day Trips & Excursions",
    details: "6 Places | 8 Activity",
    description: "If you’re looking for an unforgettable adventure in nature, look no further than...",
    price: "INR 2500.00",
  },
];

const Activities: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);

  const handleAddToCart = (activity: any) => {
    // Update local state (for badge, etc.)
    setCart((prev) => [...prev, activity]);
    // Update localStorage so Cart.tsx can read it
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    stored.push(activity);
    localStorage.setItem("cart", JSON.stringify(stored));
    alert(`${activity.title} added to cart!`);
  };

  return (
    <section className="bg-[#ccd7cd] py-12 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        Discover Your Destination
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Our collection of the most popular things to do in India.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md flex flex-col hover:shadow-2xl hover:shadow-gray-500 overflow-hidden">
            <div className="flex">
              {activity.images.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  alt={activity.title}
                  className="h-28 w-1/3 object-cover"
                />
              ))}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-gray-800 mb-1">{activity.title}</h3>
              <div className="text-xs text-purple-700 font-semibold mb-1">{activity.subtitle}</div>
              <div className="text-xs text-gray-500 mb-2">{activity.details}</div>
              <div className="text-sm text-gray-600 mb-3 flex-1">{activity.description}</div>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="block text-xs text-gray-400">from</span>
                  <span className="font-bold text-indigo-700">{activity.price}</span>
                </div>
                <button
                  className="bg-indigo-600 text-white px-5 py-2 rounded-md text-xs font-semibold hover:bg-indigo-700 transition-all"
                  onClick={() => handleAddToCart(activity)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Example: Cart count display */}
      <div className="hidden">
        Cart: {cart.length}
      </div>
    </section>
  );
};

export default Activities;