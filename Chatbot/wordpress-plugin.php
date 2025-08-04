<?php
/**
 * Plugin Name: CarSe-Chalo Chatbot
 * Plugin URI: https://example.com
 * Description: Custom AI chatbot for CarSe-Chalo - ecommerce in Tours and Travel 
 * Version: 1.0.0
 * Author: Devansh
 * License: GPL v2 or later
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class CarSeChaloChatbot {
    
    public function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('wp_footer', array($this, 'render_chatbot'));
        add_action('wp_head', array($this, 'add_chatbot_styles'));
    }
    
    public function enqueue_scripts() {
        wp_enqueue_script(
            'carse-chalo-chatbot',
            plugin_dir_url(__FILE__) . 'chatbot.js',
            array(),
            '1.0.0',
            true
        );
    }
    
    public function add_chatbot_styles() {
        echo '<link rel="stylesheet" href="' . plugin_dir_url(__FILE__) . 'chatbot-styles.css" type="text/css" media="all" />';
    }
    
    public function render_chatbot() {
        // The chatbot will be automatically rendered by the JavaScript
        echo '<!-- CarSe-Chalo Chatbot Loaded -->';
    }
}

// Initialize the plugin
new CarSeChaloChatbot();
?>