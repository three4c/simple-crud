import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3001;
const dbUrl = "mongodb://localhost/crud";

mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (dbError) => {
    if (dbError) {
      console.log(dbError);
      throw new Error(`${dbError}`);
    } else {
      console.log("db connected");
    }
    app.listen(port, (error) => {
      if (error) {
        throw new Error(error);
      } else {
        console.log(`listening on port ${port}`);
      }
    });
  }
);
