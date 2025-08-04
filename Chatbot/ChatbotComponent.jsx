import React, { useEffect, useRef } from 'react';

const ChatbotComponent = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    
    // Inject the chatbot code
    const script = document.createElement('script');
    script.innerHTML = `
// Generated Chatbot for CarSe-Chalo
// Purpose: ecommerce
// Theme: Tours and Travel 
// Tech Stack: React, tailwindcss

class CarseChaloChatbot {
  constructor() {
    this.knowledgeBase = {
  "websiteDetails": {
    "name": "CarSe-Chalo",
    "purpose": "ecommerce",
    "theme": "Tours and Travel ",
    "features": "it is destination holiday booking website for Indian Places only.",
    "makers": "Devansh",
    "techStack": "React, tailwindcss"
  },
  "sampleQA": [],
  "fileContents": "\r\nWebsite Name - CarSe-Chalo\r\n\r\nWebsite Overview -\r\nCarSe-Chalo is a comprehensive travel and transportation service website that offers car rentals, travel packages, and adventure tours. The website focuses on providing convenient travel solutions with a modern, user-friendly interface.\r\n\r\nKey Features\r\n\r\n1. User Authentication System \r\n- User registration and login functionality\r\n- Profile management\r\n- Secure user sessions with localStorage\r\n\r\n2. Search Functionality\r\n- Advanced search bar for activities, destinations, and services\r\n- Real-time search results with dropdown suggestions\r\n- Quick navigation to different sections\r\n\r\n3. Shopping Cart System\r\n- Add activities and packages to cart\r\n- Cart management with item count display\r\n- Persistent cart storage using localStorage\r\n\r\n4. Interactive UI Elements\r\n- Floating chatbot button\r\n- Responsive navigation with sidebar menu\r\n- Image carousel with auto-scrolling destinations\r\n- Hover effects and smooth transitions\r\n\r\nAvailable Destinations\r\n\r\nPopular Destinations:\r\n1. Palampur - Known for tea gardens and scenic hills\r\n2. Ladakh - High-altitude desert region with stunning landscapes\r\n3. Dharamshala - Home to the Dalai Lama and Tibetan culture\r\n4. Jaipur - The Pink City with rich history and culture\r\n5. Goa - Famous beaches and Portuguese heritage\r\n\r\nServices Offered\r\n\r\nCore Services:\r\n1. 24x7 Pickup Service - Airport, railway station, and bus stand pickup available round the clock\r\n2. Car Rental - Affordable rental cars for any journey (\"KAHIN BHI GADDI LO\")\r\n3. Travel Packages - Exciting and affordable travel packages for adventures\r\n\r\nExtended Car Services:\r\n- Airport Transfers\r\n- Luxury Cars\r\n- Outstation Rides\r\n- City Tours\r\n- Self Drive\r\n- Corporate Travel\r\n- Wedding Cars\r\n- Hourly Rentals\r\n- Event Transport\r\n- Bike Rentals\r\n- Bus/Van Hire\r\n- Custom Packages\r\n\r\nActivities & Packages with Prices\r\n\r\nDay Trips & Excursions:\r\n1. Highlights Of Palampur - INR 2,600.00\r\n   - 6 Places | 8 Activities\r\n   - Nature, Culture & Adventure\r\n\r\n2. Shakti Peeths & Forts Of Kangra - INR 2,600.00\r\n   - 5 Places | 8 Activities\r\n   - Spiritual & Historical Himachal Tour\r\n\r\n3. Bir – Paragliding, Baijnath Temple, Andretta Pottery - INR 4,800.00\r\n   - 6 Places | 8 Activities\r\n   - Paragliding in Bir, Culture & Art\r\n\r\n4. Little Lhasa – Dharamshala - INR 2,500.00\r\n   - 6 Places | 8 Activities\r\n   - Day trip near Dharamshala and Palampur\r\n\r\n5. Best Of Palampur - INR 1,850.00\r\n   - 6 Places | 8 Activities\r\n   - Nature, Food & Adventure\r\n\r\n6. Palampur & Around - INR 2,500.00\r\n   - 6 Places | 8 Activities\r\n   - Unforgettable adventure in nature\r\n\r\nMulti-Day Packages:\r\n1. Best Of Himachal (Ex Chandigarh) 8 Nights / 9 Days - INR 32,600.00\r\n   - 6 Places | 8 Activities\r\n   - Explore Himachal for 8 Days from Chandigarh\r\n\r\n2. Kullu Manali Adventure Package with 4* Resort Stay - INR 17,249.00\r\n   - 6 Places | 8 Activities\r\n   - Thrilling Kullu Manali Tour for Couples & Explorers\r\n\r\n3. Weekend Mountain Getaways – Manali (2 Nights / 3 Days) - INR 7,000.00\r\n   - 6 Places | 8 Activities\r\n   - Ultimate weekend getaway to Manali\r\n\r\nAdditional Features:\r\n1. Customer Support\r\n2. Feedback System\r\n3. Profile Management\r\n4. Cart Management\r\n\r\nTechnology Stack\r\n- React with TypeScript\r\n- Vite for build tooling\r\n- Tailwind CSS for styling\r\n- React Router for navigation\r\n- Framer Motion for animations\r\n- Local storage for data persistence\r\n\r\nBrand Identity\r\n- Brand Name: CarSe-Chalo\r\n- Tagline: \"LOSE YOURSELF | DISCOVER YOURSELF\"\r\n- Focus: Adventure tours, cultural immersions, and off-the-beaten-path journeys\r\n- Mission: Making travel dreams a reality with exceptional service and unforgettable memories"
};
    this.initialize();
  }

  initialize() {
    this.createChatWidget();
    this.setupEventListeners();
  }

  createChatWidget() {
    const chatWidget = document.createElement('div');
    chatWidget.id = 'ai-chatbot-widget';
    chatWidget.innerHTML = \`
      <div class="chatbot-container" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        height: 500px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        display: none;
        flex-direction: column;
        z-index: 10000;
        font-family: 'Inter', sans-serif;
      ">
        <div class="chatbot-header" style="
          background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
          color: white;
          padding: 16px;
          border-radius: 12px 12px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        ">
          <div style="display: flex; align-items: center;">
            <div style="
              width: 32px;
              height: 32px;
              background: rgba(255,255,255,0.2);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 12px;
            ">🤖</div>
            <div>
              <div style="font-weight: 600; font-size: 14px;">CarSe-Chalo Assistant</div>
              <div style="font-size: 12px; opacity: 0.9;">Online now</div>
            </div>
          </div>
          <button id="close-chatbot" style="
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 4px;
          ">×</button>
        </div>
        
        <div class="chatbot-messages" id="chatbot-messages" style="
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background: #f8fafc;
        ">
          <div class="message bot-message" style="
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
          ">
            <div style="
              width: 24px;
              height: 24px;
              background: #667EEA;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 8px;
              flex-shrink: 0;
            ">🤖</div>
            <div style="
              background: white;
              padding: 12px;
              border-radius: 12px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              max-width: 80%;
              font-size: 14px;
              line-height: 1.4;
            ">
              Hello! I'm your CarSe-Chalo assistant. How can I help you today?
            </div>
          </div>
        </div>
        
        <div class="chatbot-input" style="
          padding: 16px;
          border-top: 1px solid #e2e8f0;
          background: white;
          border-radius: 0 0 12px 12px;
        ">
          <div style="display: flex; gap: 8px;">
            <input 
              type="text" 
              id="chatbot-input"
              placeholder="Type your message..."
              style="
                flex: 1;
                padding: 12px;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                font-size: 14px;
                outline: none;
              "
            />
            <button id="send-message" style="
              background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
              color: white;
              border: none;
              padding: 12px 16px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 14px;
            ">Send</button>
          </div>
        </div>
      </div>
      
      <button id="chatbot-toggle" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
      ">🤖</button>
    \`;
    
    document.body.appendChild(chatWidget);
  }

  setupEventListeners() {
    const toggle = document.getElementById('chatbot-toggle');
    const container = document.querySelector('.chatbot-container');
    const closeBtn = document.getElementById('close-chatbot');
    const sendBtn = document.getElementById('send-message');
    const input = document.getElementById('chatbot-input');

    toggle.addEventListener('click', () => {
      const isVisible = container.style.display === 'flex';
      container.style.display = isVisible ? 'none' : 'flex';
      toggle.style.display = isVisible ? 'flex' : 'none';
    });

    closeBtn.addEventListener('click', () => {
      container.style.display = 'none';
      toggle.style.display = 'flex';
    });

    sendBtn.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  async sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (!message) return;

    this.addMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    this.showTyping();

    // Generate response
    const response = await this.generateResponse(message);
    
    // Remove typing indicator and show response
    this.hideTyping();
    this.addMessage(response, 'bot');
  }

  addMessage(message, type) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = \`message ${type}-message\`;
    
    if (type === 'user') {
      messageDiv.innerHTML = \`
        <div style="display: flex; justify-content: flex-end; margin-bottom: 12px;">
          <div style="
            background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
            color: white;
            padding: 12px;
            border-radius: 12px;
            max-width: 80%;
            font-size: 14px;
            line-height: 1.4;
          ">${message}</div>
          <div style="
            width: 24px;
            height: 24px;
            background: #64748b;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 8px;
            flex-shrink: 0;
          ">👤</div>
        </div>
      \`;
    } else {
      messageDiv.innerHTML = \`
        <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
          <div style="
            width: 24px;
            height: 24px;
            background: #667EEA;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 8px;
            flex-shrink: 0;
          ">🤖</div>
          <div style="
            background: white;
            padding: 12px;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 80%;
            font-size: 14px;
            line-height: 1.4;
          ">${message}</div>
        </div>
      \`;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  showTyping() {
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = \`
      <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
        <div style="
          width: 24px;
          height: 24px;
          background: #667EEA;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          flex-shrink: 0;
        ">🤖</div>
        <div style="
          background: white;
          padding: 12px;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          font-size: 14px;
        ">
          <div style="display: flex; gap: 4px;">
            <div style="width: 8px; height: 8px; background: #667EEA; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both;"></div>
            <div style="width: 8px; height: 8px; background: #667EEA; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; animation-delay: -0.32s;"></div>
            <div style="width: 8px; height: 8px; background: #667EEA; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; animation-delay: -0.16s;"></div>
          </div>
        </div>
      </div>
    \`;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  hideTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }

  async generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check sample Q&A first
    const sampleQA = this.knowledgeBase.sampleQA;
    for (const qa of sampleQA) {
      if (lowerMessage.includes(qa.question.toLowerCase()) || 
          qa.question.toLowerCase().includes(lowerMessage)) {
        return qa.answer;
      }
    }

    // Check file contents for relevant information
    const fileContent = this.knowledgeBase.fileContents;
    if (fileContent && fileContent.length > 0) {
      // Simple keyword matching in file contents
      const lines = fileContent.split('\n');
      for (const line of lines) {
        if (line.toLowerCase().includes(lowerMessage) && line.length > 10) {
          return line.trim();
        }
      }
    }

    // Domain-specific responses based on website details
    const details = this.knowledgeBase.websiteDetails;
    
    if (lowerMessage.includes('hours') || lowerMessage.includes('time') || lowerMessage.includes('open')) {
      return "Our business hours vary. Please check our website for the most up-to-date information about our operating hours.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return \`You can contact ${details.makers} for support. Please visit our website for detailed contact information.\`;
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "For pricing information, please check our website or contact our sales team directly for a personalized quote.";
    }
    
    if (lowerMessage.includes('feature') || lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return \`We offer ${details.features}. Is there a specific feature you'd like to know more about?\`;
    }
    
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who')) {
      return \`${details.makers} is ${details.purpose === 'ecommerce' ? 'an e-commerce company' : 'a company'} specializing in ${details.theme}. We focus on ${details.features}.\`;
    }

    // Default fallback response
    return \`I'm here to help with questions about ${details.name}. We're ${details.purpose === 'ecommerce' ? 'an e-commerce platform' : 'a business'} in the ${details.theme} space. How can I assist you today?\`;
  }
}

// CSS for typing animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
\`;
document.head.appendChild(style);

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
  window.CarseChaloChatbot = new CarseChaloChatbot();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CarseChaloChatbot;
}
`;
    
    document.head.appendChild(script);
    
    // Inject styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes bounce {
        0%, 80%, 100% {
          transform: scale(0);
        }
        40% {
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);
    
    isInitialized.current = true;
    
    return () => {
      // Cleanup if needed
      const existingWidget = document.getElementById('ai-chatbot-widget');
      if (existingWidget) {
        existingWidget.remove();
      }
    };
  }, []);

  return null; // The chatbot renders itself via DOM manipulation
};

export default ChatbotComponent;