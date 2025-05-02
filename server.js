
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/process-payment', (req, res) => {
  const token = req.body.token;
  console.log("Received token:", token);

  // TODO: Send token to BlueSnap for processing

  res.status(200).json({ message: "Payment processed successfully" });
});

app.get('/', (req, res) => {
  res.send("Backend is live!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

