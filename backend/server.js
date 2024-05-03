import app from "./app.js";
import express from "express";
import {dirname} from "path";
const app = express();
app.use(express.json());

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
