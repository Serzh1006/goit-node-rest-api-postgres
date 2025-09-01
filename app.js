import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import "./db/connect_db.js";

import contactsRouter from "./routes/contactsRouter.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("/api/contacts", contactsRouter);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
