import app from "./app.js";

import {dirname} from "path";

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
