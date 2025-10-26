import { Router } from "express";
import { validateSumRequest } from "../middleware/validation";
import { SumRequest } from "../types";

const router = Router();

router.post("/", validateSumRequest, (req: { body: SumRequest }, res) => {
  const { numbers } = req.body;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  res.json({ sum });
});

export default router;
