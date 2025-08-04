# CarSe-Chalo - Custom AI Chatbot

This package contains your custom AI chatbot generated specifically for **CarSe-Chalo**.

## 🚀 Quick Start

### Option 1: HTML/CSS/JavaScript (Recommended)

1. Copy `chatbot.js` and `chatbot-styles.css` to your website directory
2. Add this code before the closing `</body>` tag of your HTML pages:

```html
<link rel="stylesheet" href="chatbot-styles.css">
<script src="chatbot.js"></script>
```

That's it! Your chatbot will appear as a floating widget on your pages.

### Option 2: React Integration

1. Copy `ChatbotComponent.jsx` to your React project
2. Import and use the component:

```jsx
import ChatbotComponent from './ChatbotComponent';

function App() {
  return (
    <div>
      {/* Your app content */}
      <ChatbotComponent />
    </div>
  );
}
```

### Option 3: Vue.js Integration

1. Copy `ChatbotComponent.vue` to your Vue project
2. Import and use the component:

```vue
<template>
  <div>
    <!-- Your app content -->
    <ChatbotComponent />
  </div>
</template>

<script>
import ChatbotComponent from './ChatbotComponent.vue';

export default {
  components: {
    ChatbotComponent
  }
};
</script>
```

### Option 4: WordPress Integration

1. Upload `wordpress-plugin.php` to your `/wp-content/plugins/` directory
2. Activate the plugin in your WordPress admin panel
3. The chatbot will automatically appear on all pages

## 🎨 Customization

### Colors and Styling

Edit the CSS variables in `chatbot-styles.css`:

```css
:root {
  --chatbot-primary: #667EEA;     /* Main brand color */
  --chatbot-secondary: #764BA2;   /* Secondary color */
  --chatbot-accent: #F093FB;      /* Accent color */
  --chatbot-background: #ffffff;  /* Background color */
  --chatbot-text: #2D3748;        /* Text color */
}
```

### Position and Size

Modify the chatbot container styles:

```css
#ai-chatbot-widget .chatbot-container {
  width: 400px;          /* Adjust width */
  height: 600px;         /* Adjust height */
  bottom: 20px;          /* Distance from bottom */
  right: 20px;           /* Distance from right */
}
```

## 📱 Features

Your chatbot includes these intelligent features:

- **Contextual Understanding**: Responds based on your website content
- **Sample Q&A Integration**: Uses your provided Q&A pairs
- **File Content Search**: Searches through uploaded documents
- **Responsive Design**: Works on desktop and mobile
- **Accessibility**: Keyboard navigation and screen reader support
- **Dark Mode**: Automatic dark mode detection

---

**Created by:** Devansh  
**Purpose:** ecommerce  
**Theme:** Tours and Travel   
**Tech Stack:** React, tailwindcss

Generated with ❤️ by ChatBot Builder Pro