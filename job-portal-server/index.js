import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";
import router from "./routes/jobs.js";
import 'dotenv/config'


// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.info(`App listening at http://localhost:${PORT}`);
      // ADD DATA ONE TIME
      // User.insertMany(users)
      // Post.insertMany(posts)
    });
  })
  .catch((error) => {
    console.log(` ${error}Couldn't connect to MongoDB`);
  });
