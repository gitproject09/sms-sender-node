# 📩 Bulk SMS Sender (Node.js + Twilio + Excel Upload)

A simple web-based tool to send personalized SMS messages to multiple phone numbers using an Excel spreadsheet and Twilio.

## ✨ Features

- Upload `.xlsx` or `.xls` file
- Automatically parses phone numbers and messages
- Sends messages via Twilio SMS API
- Simple frontend for easy use
- Ready for deployment on Netlify (frontend) and Render (backend)

---

## 📁 Project Structure

```
sms-sender-node/
├── index.html          # Frontend UI (can be deployed on Netlify)
├── server.js           # Node.js backend with Express and Twilio
├── package.json        # Dependencies and scripts
└── uploads/            # Temp folder for uploaded Excel files
```

---

## 📦 Installation & Setup (Local)

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sms-sender-node.git
cd sms-sender-node
```

2. Install dependencies:

```bash
npm install
```

3. Add your [Twilio](https://www.twilio.com/) credentials in `server.js`:

```js
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const twilioNumber = 'your_twilio_phone_number';
```

4. Start the server:

```bash
npm start
```

5. Open `index.html` in a browser to use the app.

---

## 🧪 Excel File Format

Your Excel file should contain the following columns:

| Phone Number | Message                |
|--------------|------------------------|
| +1234567890  | Hello Supan!           |
| +1987654321  | Your appointment is... |

---

## 🚀 Deployment

### Backend (Render)
1. Push the project to GitHub.
2. Create a new Web Service on [Render](https://render.com/).
3. Use:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add Environment Variables:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_PHONE_NUMBER`

### Frontend (Netlify)
1. Use the `index.html` from this project.
2. Replace this line in `index.html`:

```js
fetch('http://localhost:3000/upload', {
```

with your Render backend URL, like:

```js
fetch('https://your-backend.onrender.com/upload', {
```

3. Deploy on [https://netlify.com](https://netlify.com) using drag-and-drop or GitHub repo.

---

## ✅ To-Do / Ideas

- Add login/authentication
- Show progress/status for each SMS
- Integrate other SMS APIs (Nexmo, MSG91)

---

## 🛡️ Disclaimer

This tool sends real SMS messages and may incur costs. Always test with a Twilio trial number and use responsibly.

---

## 📬 Contact

Made by [Supan Ahmmed] — feel free to contribute or ask questions!
