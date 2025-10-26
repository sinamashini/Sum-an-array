import { z } from "zod";

export const SumRequestSchema = z.object({
  numbers: z.array(z.number()).optional().default([]), 
});

export type SumRequest = z.infer<typeof SumRequestSchema>;
