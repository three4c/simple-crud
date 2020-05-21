import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Character from "./character";

const app = express();
const port = process.env.PORT || 3001;
const dbUrl = "mongodb://localhost/crud";

app.use(express.static("client/build"));
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

    app.get("/api/characters", (_, response) => {
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

      if (!name && !age) {
        return;
      }

      new Character({
        name,
        age,
      }).save((error) => {
        if (error) {
          response.status(500).send();
        } else {
          Character.find({}, (findError, characterArray) => {
            if (findError) {
              response.status(500).send();
            } else {
              response.status(200).send(characterArray);
            }
          });
        }
      });
    });

    app.put("/api/characters", (request, response) => {
      const { id, name, age } = request.body;
      /** $setでキーを選択してアップデートする */
      Character.findByIdAndUpdate(
        id,
        { $set: { name: name, age: age } },
        (error) => {
          if (error) {
            response.status(500).send();
          } else {
            Character.find({}, (findError, characterArray) => {
              if (findError) {
                response.status(500).send();
              } else {
                response.status(200).send(characterArray);
              }
            });
          }
        }
      );
    });

    app.delete("/api/characters", (request, response) => {
      const { id } = request.body;
      Character.findByIdAndRemove(id, (error) => {
        if (error) {
          response.status(500).send();
        } else {
          Character.find({}, (findError, characterArray) => {
            if (findError) {
              response.status(500).send();
            } else {
              response.status(200).send(characterArray);
            }
          });
        }
      });
    });

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  }
);
