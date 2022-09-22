const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
app.use(cors());

// import routes
// const useRoutes = require("./routes/user");
// app.use("/api", useRoutes);

// import route using map
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

app.listen(8000, () => {
  console.log("server is lestining...");
});
