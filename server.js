const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the video file
app.get('/dronevid.mp4', (req, res) => {
  const videoPath = path.join(__dirname, 'public/assets', 'dronevid.mp4');
  
  // Set the appropriate Content-Type header
  res.setHeader('Content-Type', 'video/mp4');

  // Stream the video file
  res.sendFile(videoPath);
});

// Handle React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
