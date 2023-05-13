import { ErrorRequestHandler, Request, Response } from 'express';

export default function errorHandler(err: ErrorRequestHandler, req: Request, res: Response) {
  console.error('[Error Hander] ', err); // eslint-disable-line no-console
  res.sendStatus(500);
}
