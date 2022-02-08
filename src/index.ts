import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("/index.html");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
