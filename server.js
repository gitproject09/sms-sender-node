const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const cors = require('cors');
const { Twilio } = require('twilio');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Allow CORS for frontend
app.use(cors());

// Twilio credentials (replace with your real credentials)
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const twilioNumber = 'your_twilio_number';
const client = new Twilio(accountSid, authToken);

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Handle file upload and SMS sending
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    // Expected Excel columns: "Phone Number", "Message"
    for (const row of data) {
      const to = row['Phone Number'];
      const body = row['Message'];

      if (to && body) {
        await client.messages.create({
          body,
          from: twilioNumber,
          to
        });
        console.log(`Sent message to ${to}`);
      }
    }

    // Clean up uploaded file
    fs.unlinkSync(filePath);

    res.json({ success: true, message: 'Messages sent.' });
  } catch (error) {
    console.error('Error sending messages:', error);
    res.status(500).json({ error: 'Failed to send messages.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});