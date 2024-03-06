const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT;
const corsOptions = {
  origin: `http://localhost:${process.env.CLIENT_PORT}`,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())

app.use('/api/users', userRoutes);

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
