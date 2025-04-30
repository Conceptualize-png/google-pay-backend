const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/process-payment', (req, res) => {
  const paymentToken = req.body.token;
  console.log('Received token:', paymentToken);

  // Here you would forward the token to BlueSnap and handle the response.
  // For now, we’ll just simulate a success.
  res.json({ success: true, message: 'Payment processed successfully (simulated).' });
});

app.get('/', (req, res) => {
  res.send('Google Pay Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});