import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";
import { SumRequestSchema } from "../types";

export const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Validation failed",
          details: error.errors.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        });
      }
      next(error);
    }
  };
};

export const validateSumRequest = validateRequest(SumRequestSchema);
