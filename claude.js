<pre style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;">
<code>// Claude Theme for TypingMind
// Copy this code and paste it into TypingMind's Extension section

const claudeTheme = {
  name: 'Claude Theme',
  version: '1.0',
  description: 'Makes TypingMind look like Claude',
  css: `
    /* Base theme colors */
    :root {
      --background-primary: #FAF9F7;
      --text-primary: #1A1919;
      --sidebar-bg: #FAF9F7;
      --claude-border: #E5E5E5;
      --claude-hover: #F5F5F5;
    }

    /* Sidebar styling */
    .sidebar {
      background-color: var(--sidebar-bg) !important;
      border-right: 1px solid var(--claude-border) !important;
    }

    /* Chat container */
    .chat-container {
      background-color: var(--background-primary) !important;
      max-width: 900px !important;
      margin: 0 auto !important;
    }

    /* Message styling */
    .message {
      background-color: transparent !important;
      border-radius: 0 !important;
      padding: 20px !important;
      font-size: 15px !important;
      line-height: 1.5 !important;
    }

    /* Input box styling */
    .chat-input-container {
      max-width: 900px !important;
      margin: 0 auto !important;
      padding: 20px !important;
    }

    .chat-input {
      border: 1px solid var(--claude-border) !important;
      border-radius: 8px !important;
      background-color: white !important;
    }

    /* Button styling */
    .primary-button {
      background-color: #F0F0F0 !important;
      color: var(--text-primary) !important;
      border-radius: 4px !important;
      font-weight: normal !important;
    }

    /* Hover states */
    .sidebar-item:hover {
      background-color: var(--claude-hover) !important;
    }

    /* Typography */
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    }

    /* Project Knowledge panel */
    .knowledge-panel {
      border-left: 1px solid var(--claude-border) !important;
      background-color: var(--background-primary) !important;
    }

    /* Chat header */
    .chat-header {
      border-bottom: 1px solid var(--claude-border) !important;
      background-color: transparent !important;
    }

    /* Model selector */
    .model-selector {
      border: 1px solid var(--claude-border) !important;
      border-radius: 4px !important;
      background-color: transparent !important;
    }
  `,
  js: `
    // Add any additional JavaScript functionality here
    console.log('Claude theme loaded');
  `
};

// Register the theme
window.registerExtension(claudeTheme);
</code></pre>

<p style="margin-top: 15px;">
<strong>Instructions:</strong>
1. Copy the code above
2. In TypingMind, go to Settings → Extensions
3. Click "Add Extension"
4. Paste the code and save
</p>
