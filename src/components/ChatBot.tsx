import React, { useState, useRef, useEffect } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "👋 Hello! I'm your CarSe-Chalo Assistant. How can I help you with your travel plans today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const knowledgeBase = {
    websiteDetails: {
      name: "CarSe-Chalo",
      purpose: "ecommerce",
      theme: "Tours and Travel",
      features: "it is destination holiday booking website for Indian Places only.",
      makers: "Devansh",
      techStack: "React, tailwindcss"
    },
    services: [
      "24x7 Pickup Service - Airport, railway station, and bus stand pickup",
      "Car Rental - Affordable rental cars for any journey",
      "Travel Packages - Exciting and affordable travel packages",
      "Airport Transfers", "Luxury Cars", "Outstation Rides", "City Tours",
      "Self Drive", "Corporate Travel", "Wedding Cars", "Hourly Rentals",
      "Event Transport", "Bike Rentals", "Bus/Van Hire", "Custom Packages"
    ],
    destinations: [
      "Palampur - Tea gardens and scenic hills",
      "Ladakh - High-altitude desert region",
      "Dharamshala - Home to the Dalai Lama",
      "Jaipur - The Pink City",
      "Goa - Famous beaches and Portuguese heritage"
    ],
    packages: [
      "Highlights Of Palampur - INR 2,600.00",
      "Shakti Peeths & Forts Of Kangra - INR 2,600.00",
      "Bir – Paragliding, Baijnath Temple - INR 4,800.00",
      "Little Lhasa – Dharamshala - INR 2,500.00",
      "Best Of Palampur - INR 1,850.00",
      "Best Of Himachal (Ex Chandigarh) 8 Nights - INR 32,600.00"
    ]
  };

  const generateResponse = (userText: string): string => {
    const text = userText.toLowerCase();
    
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
      return "👋 Hello! How can I assist you with your travel plans today?";
    }
    
    if (text.includes("book") || text.includes("booking")) {
      return "📅 You can book rides, cars, or travel packages through our booking section. We offer 24x7 pickup service from airports, railway stations, and bus stands!";
    }
    
    if (text.includes("car") || text.includes("vehicle")) {
      return "🚗 We offer various car options: hatchbacks, sedans, SUVs, and luxury cars. Our services include airport transfers, outstation rides, city tours, and self-drive options.";
    }
    
    if (text.includes("service") || text.includes("services")) {
      return `🛠️ Our services include: ${knowledgeBase.services.slice(0, 5).join(", ")} and many more! What specific service are you looking for?`;
    }
    
    if (text.includes("destination") || text.includes("place") || text.includes("where")) {
      return `🗺️ Popular destinations: ${knowledgeBase.destinations.slice(0, 3).join(", ")}. We focus on Indian destinations with amazing travel experiences!`;
    }
    
    if (text.includes("package") || text.includes("tour") || text.includes("trip")) {
      return `📦 Popular packages: ${knowledgeBase.packages.slice(0, 3).join(", ")}. All packages include guided tours and comfortable accommodations!`;
    }
    
    if (text.includes("price") || text.includes("cost") || text.includes("rate")) {
      return "💰 Our prices start from INR 1,850 for day trips and go up to INR 32,600 for multi-day packages. Prices vary based on duration, accommodation, and activities included.";
    }
    
    if (text.includes("contact") || text.includes("support") || text.includes("help")) {
      return "📞 For support, you can email us at support@carse-chalo.com or call us at +91-XXXXXXX. We're here to help 24/7!";
    }
    
    if (text.includes("cancel") || text.includes("refund")) {
      return "❌ For cancellations and refunds, please contact our customer support team. Cancellation policies vary by package type.";
    }
    
    if (text.includes("payment") || text.includes("pay")) {
      return "💳 We accept all major credit cards, debit cards, UPI, and net banking. Payment can be made online or on arrival.";
    }
    
    if (text.includes("about") || text.includes("company")) {
      return "🏢 CarSe-Chalo is your trusted travel partner, making travel dreams a reality with exceptional service and unforgettable memories. Our tagline is 'LOSE YOURSELF | DISCOVER YOURSELF'.";
    }
    
    return "🤔 I'm here to help with questions about CarSe-Chalo travel services. You can ask about booking, destinations, packages, prices, or contact information. How can I assist you?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateResponse(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 800);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden">
      {/* Chat Display */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gradient-to-b from-white to-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow transition-opacity duration-300 ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end rounded-br-none ml-auto"
                : "bg-gray-200 text-gray-900 self-start rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="text-gray-500 text-xs italic animate-pulse">CarSe-Chalo Assistant is typing...</div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-2 border-t bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition shadow"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
