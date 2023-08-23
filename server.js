require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser"); 
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/contactFormDB";



mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

const submissionSchema = new mongoose.Schema({
    name: String,
    userEmail: String,
    phoneNumber: String,
    companyName: String,
    address: String,
    typeOfService: String,
    comment: String,
    howDidYouHear: String,
    otherText: String,
});

const Submission = mongoose.model('Submission', submissionSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/dronevid.mp4', (req, res) => {
    const videoPath = path.join(__dirname, 'public/assets', 'dronevid.mp4');
    res.setHeader('Content-Type', 'video/mp4');
    res.sendFile(videoPath);
});

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_ACC,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/api/send-email", (req, res) => {
    const {
        name,
        userEmail,
        phoneNumber,
        companyName,
        address,
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
      <p>Address: ${address}</p>
      <p>Type of Service: ${typeOfService}</p>
      <p>Comment: ${comment}</p>
      <p>How Did You Hear About Us: ${howDidYouHear}</p>
      ${howDidYouHear === "Other" ? `<p>Other Text: ${otherText}</p>` : ""}
    `,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
            res.status(500).json({ error: "Error sending email" });
            return;
        }
        
        console.log("Email sent:", info.response);

        const submission = new Submission({
            name,
            userEmail,
            phoneNumber,
            companyName,
            address,
            typeOfService,
            comment,
            howDidYouHear,
            otherText
        });

        try {
            await submission.save();
            console.log("Data saved to database");
            res.json({ message: "Email sent and data saved successfully" });
        } catch (err) {
            console.log("Error saving data to database:", err);
            res.status(500).json({ error: "Error saving data to database" });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
