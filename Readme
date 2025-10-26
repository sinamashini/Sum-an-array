# Sum API

A simple Node.js Express API built with TypeScript to calculate the sum of an array of numbers via a POST endpoint. Includes input validation, error handling, and a health check.

## Features
- **Endpoint**: POST `/sum` accepts `{ "numbers": [1, 2, 3] }` and returns `{ "sum": 6 }`.
- Zod-based validation for request body.
- Global error handler with status-specific messages.
- TypeScript for type safety.
- Modular structure (types, middleware, routes).

## Installation
1. Clone or create the project directory.
2. Run `npm install` to install dependencies.
3. Build: `npm run build` (for production).

## Usage
### Development
- Start dev server: `npm run dev` (uses ts-node).

### Production
- Build and start: `npm run build && npm start`.

Server runs on `PORT=3000` by default.

### API Endpoints
- **POST /sum**  
  Body: `{ "numbers": [number, ...] }` (array of at least 1 number)  
  Response: `{ "sum": number }`  
  Errors: 400 for invalid input.

- **GET /health**  
  Response: `{ "status": "OK" }`

### Example Request (cURL)
```bash
curl -X POST http://localhost:3000/sum \
  -H "Content-Type: application/json" \
  -d '{"numbers": [1, 2, 3]}'
```

## Folder Structure
```
src/
├── types/
│   └── index.ts
├── middleware/
│   ├── validation.ts
│   └── errorHandler.ts
├── routes/
│   └── sum.ts
└── index.ts
```

## License
MIT