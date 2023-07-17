const express = require("express");
const BoardModel = require("../model/Board.model");

const boardRouter = express.Router();

// for create
boardRouter.post("/create", async (req, res) => {
  try {
    const board = new BoardModel(req.body);
    await board.save();
    res.status(200).send({ msg: "new board created successfully" });
  } catch (error) {
    res.send(400).send({ msg: error.message });
  }
});

// for get
boardRouter.get("/", async (req, res) => {
  try {
    const boards = await BoardModel.find();
    res.status(200).send(boards);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// for update
boardRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BoardModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send("Updated Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// for deleting
boardRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BoardModel.findByIdAndDelete({ _id: id });
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = boardRouter;
