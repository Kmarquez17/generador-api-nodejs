import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "dotenv/config";

//routes
import router from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//router
app.use("/api", router);

//Puerto
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function() {
  console.log("Server On Port " + app.get("port"));
});
