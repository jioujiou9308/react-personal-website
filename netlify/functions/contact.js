const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, subject, message } = data;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ 
          success: false, 
          message: 'Please fill in all fields' 
        })
      };
    }
    
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
    
    // For demonstration purposes, we'll just log the data and return success
    // Uncomment the line below when ready to send emails
    // await transporter.sendMail(mailOptions);
    
    console.log('Contact form submission:', { name, email, subject, message });
    
    return { 
      statusCode: 200, 
      body: JSON.stringify({ 
        success: true, 
        message: 'Message received! Thank you for contacting us.' 
      })
    };
    
  } catch (error) {
    console.error('Error processing request:', error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      })
    };
  }
};
