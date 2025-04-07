const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');
const nodemailer = require('nodemailer');

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST /api/subscribe
router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ success: false, message: 'Email already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Newsletter Subscription Confirmation',
      html:
       `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; height: 100vh;">
  <h2 style="color: #720740; text-align: center;">Thank you for subscribing!</h2>
  <div>
    <p>We're excited to have you on board. Stay tuned for updates and special offers.</p>
  </div>
  <p style="margin-top: 20px;">Best regards,</p>
  <p style="font-weight: bold;">The Blog Team</p>
</div>
       `
    });

    // Notify admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Subscriber Alert!',
      html:
       `<h2>New Subscriber Alert</h2><p>A new user has subscribed with the email: <strong>${email}</strong></p>
       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; height: 100vh;">
  <div>
    <p>We're excited to have you on board. Stay tuned for updates and special offers.</p>
  </div>
</div>
       `
    });

    res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error("Subscription Error:", error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// MOVE THESE OUTSIDE THE POST ROUTE

// GET /api/subscribe/list
router.get('/list', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, 'email'); // Only return email field
    res.status(200).json(subscribers || []);
  } catch (error) {
    console.error('Error fetching subscriber list:', error);
    res.status(500).json({ message: 'Error fetching subscriber list' });
  }
});

// POST /api/subscribe/send-email
router.post('/send-email', async (req, res) => {
  const { subject, message } = req.body;

  try {
    const subscribers = await Subscriber.find({}, 'email') || [];
    const emailList = Array.isArray(subscribers) ? subscribers.map(sub => sub.email) : [];

    if (emailList.length === 0) {
      return res.status(400).json({ message: 'No subscribers available.' });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      bcc: emailList.join(','),
      subject: subject,
      text: message,
      html: `<p>${message}</p>`
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ message: 'Failed to send emails' });
  }
});

module.exports = router;
