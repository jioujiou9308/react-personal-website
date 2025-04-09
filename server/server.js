import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Simple validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields' });
  }
  
  try {
    // Configure nodemailer (replace with your email service details)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Use environment variable in production
        pass: process.env.EMAIL_PASS || 'your-email-password'   // Use environment variable in production
      }
    });
    
    // Email options
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com', // Replace with your email
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };
    
    // Send email (commented out for now - uncomment when ready to use)
    // await transporter.sendMail(mailOptions);
    
    // For demonstration purposes, we'll just log the data and return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Message received! Thank you for contacting us.' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    });
  }
});

// Serve the React app for any other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
