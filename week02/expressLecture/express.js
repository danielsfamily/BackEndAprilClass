const express = require("express");
const app = express();
app.use(express.json()); //allows access tp the request.body

let db = ["test"];

app.get("/get", (req, res) => {
  console.log("Get route hit", db);
  res.json(db);
});

app.get("/pokemon", (req, res) => {
  console.log("pokemon route hit");
  res.json("Hello Pokemon",db);
});

app.post("/post", (req, res) => {
  console.log("POST route hit", req.body);
  db.push(req.body.todo);

  res.json({ msg: "Post response" });
});

app.delete("/delete/:id",(req,res) =>{
  console.log("Delete route Hit", req.params.id)
console.log(db.filter((item) => item !== req.params.id))
db=db.filter((item) => item !== req.params.id)

})
app.put("/put/:todo",(req,res) => {
  console.log("PUT route hit --", "params:", req.params.todo, "req.body:",req.body)
  
  
})


app.listen(3000, () => {
  console.log("server is running");
});
