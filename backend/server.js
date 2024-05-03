import app from "./app.js";
import express from "express";
import path from "path";

const frontendBuildPath = path.join(process.cwd(), "frontend", "build");

if(process.env.NODE_ENV === "production"){
  app.use(express.static(frontendBuildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendBuildPath, "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
