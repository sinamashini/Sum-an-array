import { ErrorRequestHandler } from "express";

const errorMessages: Record<number, string> = {
  400: "Bad Request: The request could not be understood by the server due to malformed syntax.",
  401: "Unauthorized: Authentication is required and has failed or has not yet been provided.",
  403: "Forbidden: The client does not have access rights to the content.",
  404: "Not Found: The requested resource could not be found.",
  500: "Internal Server Error: An unexpected condition was encountered on the server.",
  501: "Not Implemented: The requested method is not supported by the server.",
  502: "Bad Gateway: The server received an invalid response from an upstream server.",
  503: "Service Unavailable: The server is temporarily unable to handle the request.",
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let status = 500;
  let message = errorMessages[500];

  if (err.status) {
    status = err.status;
    message = errorMessages[status] || errorMessages[500];
  } else if (typeof err === "number") {
    status = err;
    message = errorMessages[status] || errorMessages[500];
  }

  console.error(`Error [${status}]: ${err.message || err.stack || err}`);

  res.status(status).json({
    error: true,
    status,
    message,
    ...(process.env.NODE_ENV === "development" && {
      details: err.message || err.stack,
    }),
  });
};
