const express = require("express");
const cors = require("cors");
const { connect } = require("./middleware/database");
const songsRouter = require("./routes/songs");
require("dotenv").config();

const app = express();

//setting cors options
const corsOptions = {
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ["http://localhost:5173", "http://localhost:3000"],
};
app.use(cors(corsOptions));
app.use(express.json());

//connecting to database
connect();

//for song route
app.use("/songs", songsRouter);

app.use("/", async (req, res) => {
  res.send("Wellcome to my Music App, try another routes!");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("\x1b[32m%s\x1b[0m", `Server is running on port ${port}`);
});

module.exports = app;
