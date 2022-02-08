import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile("/index.html");
});

app.get("/FirstPage", (request, response) => {
  response.sendFile("/Users/z6/Workspace/First-Website/public/page1/index.html");
});

app.get("/SecondPage", (request, response) => {
  response.sendFile("/Users/z6/Workspace/First-Website/public/page2/index.html");
});

app.get("/ThirdPage", (request, response) => {
  response.sendFile("/Users/z6/Workspace/First-Website/public/page3/index.html");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
