const express = require("express");
const LinkedList = require("./api/LinkedList");
const port = process.env.PORT || 8000;
const app = express();
const myData = new LinkedList();

app.use(express.static(__dirname + "/api"));

app.get("/", (req, res) => {
  let dataArray = myData.createArray();
  res.json({ data: dataArray });
});

app.post("/:data", (req, res) => {
  myData.addTail(req.params.data);
  res.json(myData);
});

app.put("/:oldData/:newData", (req, res) => {
  const { oldData, newData } = req.params;
  myData.editNode(oldData, newData);
  res.json(myData);
});

app.delete("/:data", (req, res) => {
  myData.removeNode(req.params.data);
  res.json(myData);
});

app.listen(port, () => {
  console.log("server online on port: ", port);
});
