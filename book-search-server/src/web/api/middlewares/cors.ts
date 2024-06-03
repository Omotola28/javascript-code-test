import cors from 'cors'

export function enableCors() {
  return cors({
    allowedHeaders: ['Accept', 'Authorization', 'Content-Type'],
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
    origin: [/localhost:?\d{0,10}$/],
    preflightContinue: false,
  });
}
