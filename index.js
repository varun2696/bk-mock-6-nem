const express = require("express");
const connection = require("./db");
const boardRouter = require("./route/Board.route");
const { PORT } = process.env;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/board", boardRouter);

// app.get("/", (req,res)=>{
//   res.send("Hello World");
// })

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connection established");
  } catch (error) {
    console.log("Connection error", error.message);
  }

  console.log(`Server is running on port ${PORT}`);
});
