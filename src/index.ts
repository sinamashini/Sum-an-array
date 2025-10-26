import express, { Application } from "express";
import sumRouter from "./routes/sum";
import { errorHandler } from "./middleware/errorHandler";

const app: Application = express();
const PORT = process.env.PORT || 3200;

app.use(express.json()); 

app.use("/sum", sumRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
