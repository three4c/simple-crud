import express, { request } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Character from "./character";

const app = express();
const port = 3001;
const dbUrl = "mongodb://localhost/crud";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

    app.get("/api/characters", (request, response) => {
      Character.find({}, (error, characterArray) => {
        if (error) {
          response.status(500).send();
        } else {
          response.status(200).send(characterArray);
        }
      });
    });

    app.post("/api/characters", (request, response) => {
      const { name, age } = request.body;

      new Character({
        name,
        age,
      }).save((error) => {
        if (error) {
          response.status(500);
        } else {
          response
            .status(200)
            .send(`${name}(${age}) was successfully created.`);
        }
      });
    });

    app.listen(port, (error) => {
      if (error) {
        throw new Error(error);
      } else {
        console.log(`listening on port ${port}`);
      }
    });
  }
);
