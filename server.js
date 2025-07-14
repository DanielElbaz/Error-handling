// server.js
const express = require('express');
const path = require('./');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Secret message route
app.get('/message', (req, res) => {
  res.send('This is a secret message 🤫');
});

// For any other route, serve index.html (useful for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});