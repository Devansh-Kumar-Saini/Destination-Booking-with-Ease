# CarSe-Chalo Chatbot - Advanced Customization Guide

## Custom Styling

### Color Schemes
You can create custom color schemes by modifying the CSS variables:

```css
/* Modern Blue Theme */
:root {
  --chatbot-primary: #3B82F6;
  --chatbot-secondary: #1E40AF;
  --chatbot-accent: #60A5FA;
}

/* Green Business Theme */
:root {
  --chatbot-primary: #10B981;
  --chatbot-secondary: #047857;
  --chatbot-accent: #34D399;
}

/* Purple Creative Theme */
:root {
  --chatbot-primary: #8B5CF6;
  --chatbot-secondary: #6D28D9;
  --chatbot-accent: #A78BFA;
}
```

### Custom Positioning
Place the chatbot in different positions:

```css
/* Bottom Left */
#ai-chatbot-widget .chatbot-container {
  left: 20px;
  right: auto;
}

/* Top Right */
#ai-chatbot-widget .chatbot-container {
  top: 20px;
  bottom: auto;
}

/* Center Screen */
#ai-chatbot-widget .chatbot-container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: auto;
  right: auto;
}
```

## Advanced Configuration

### Custom API Integration
To connect your chatbot to external APIs:

```javascript
// Modify the generateResponse method in chatbot.js
async generateResponse(message) {
  try {
    const response = await fetch('https://your-api.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        message: message,
        context: this.knowledgeBase
      })
    });
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    return this.fallbackResponse(message);
  }
}
```

### Custom Knowledge Base
Add more training data to your chatbot:

```javascript
// In chatbot.js, extend the knowledgeBase object
this.knowledgeBase = {
  ...this.knowledgeBase,
  customFAQ: [
    {
      keywords: ['shipping', 'delivery', 'send'],
      response: 'We offer free shipping on orders over $50. Standard delivery takes 3-5 business days.'
    },
    {
      keywords: ['return', 'refund', 'exchange'],
      response: 'You can return items within 30 days for a full refund. Visit our returns page for more details.'
    }
  ]
};
```

### Event Tracking
Add analytics to track chatbot usage:

```javascript
// Add to the sendMessage method
sendMessage() {
  // ... existing code ...
  
  // Track with Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'chatbot_interaction', {
      'event_category': 'chatbot',
      'event_label': message
    });
  }
  
  // Track with custom analytics
  if (window.customAnalytics) {
    window.customAnalytics.track('chatbot_message', {
      message: message,
      timestamp: new Date().toISOString()
    });
  }
}
```

## Integration Examples

### WordPress Shortcode
Create a shortcode to place the chatbot anywhere:

```php
// Add to your theme's functions.php
function carsechalo_chatbot_shortcode() {
    return '<div id="chatbot-placeholder"></div>
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const placeholder = document.getElementById("chatbot-placeholder");
        const chatbot = document.getElementById("ai-chatbot-widget");
        if (chatbot && placeholder) {
            placeholder.appendChild(chatbot);
        }
    });
    </script>';
}
add_shortcode('carse-chalo_chatbot', 'carsechalo_chatbot_shortcode');
```

### React Hook Integration
Create a custom React hook:

```jsx
import { useEffect, useState } from 'react';

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // Initialize chatbot
    if (window.CarSeChaloChatbot) {
      const chatbot = window.CarSeChaloChatbot;
      
      // Override methods to integrate with React state
      chatbot.originalAddMessage = chatbot.addMessage;
      chatbot.addMessage = (message, type) => {
        chatbot.originalAddMessage(message, type);
        setMessages(prev => [...prev, { message, type, timestamp: Date.now() }]);
      };
    }
  }, []);
  
  return { isOpen, setIsOpen, messages };
}
```

## Troubleshooting

### Common Issues

1. **Chatbot not appearing**: Check browser console for JavaScript errors
2. **Styling conflicts**: Use more specific CSS selectors or !important
3. **Mobile responsiveness**: Test on various devices and adjust breakpoints
4. **Performance**: Optimize images and reduce JavaScript payload

### Debug Mode
Enable debug mode by adding this to your page:

```javascript
window.chatbotDebug = true;
```

This will log all chatbot interactions to the browser console.

---

For more support, refer to the main README.md file or contact Devansh.