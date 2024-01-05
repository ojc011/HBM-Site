require('dotenv').config();
const express = require("express");
const forceHttps = require('express-force-https');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Force HTTPS for the entire application
app.use(forceHttps);

app.use((req, res, next) => {
    if (req.hostname === 'roofline.com') {
        res.redirect(301, `https://www.roofline.com${req.url}`);
    } else {
        next();
    }
});

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
    submissionDate: Date, // Add the new field here
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
        <div style="border: 2px solid #e0e0e0; padding: 15px; max-width: 600px; font-family: Arial, sans-serif;">
            <h2 style="color: #333; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Company Name:</strong> ${companyName}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Type of Service:</strong> ${typeOfService}</p>
            <p><strong>Comment:</strong> ${comment}</p>
            <p><strong>How Did You Hear About Us:</strong> ${howDidYouHear}</p>
            ${howDidYouHear === "Other" ? `<p><strong>Other:</strong> ${otherText}</p>` : ""}
        </div>
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
            otherText,
            submissionDate: new Date(), // Set the submission date to the current date and time
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
