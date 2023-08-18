require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Serve static files from the build directory (output of React build)
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Serve the video file
app.get('/dronevid.mp4', (req, res) => {
  const videoPath = path.join(__dirname, 'public/assets', 'dronevid.mp4');
  
  // Set the appropriate Content-Type header
  res.setHeader('Content-Type', 'video/mp4');

  // Stream the video file
  res.sendFile(videoPath);
});

// Handle React's index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ACC,
    pass: process.env.EMAIL_PASS,
  },
});

// API endpoint to send email
app.post("/api/send-email", (req, res) => {
  const {
    name,
    userEmail,
    phoneNumber,
    companyName,
    address, // Include the address field
    typeOfService,
    comment,
    howDidYouHear,
    otherText,
  } = req.body;

  const mailOptions = {
    from: userEmail,
    to: process.env.EMAIL_ACC,
    subject: "HBM WEBSITE CONTACT",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${userEmail}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Company Name: ${companyName}</p>
      <p>Address: ${address}</p> <!-- Include the address in the email content -->
      <p>Type of Service: ${typeOfService}</p>
      <p>Comment: ${comment}</p>
      <p>How Did You Hear About Us: ${howDidYouHear}</p>
      ${howDidYouHear === "Other" ? `<p>Other Text: ${otherText}</p>` : ""}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});