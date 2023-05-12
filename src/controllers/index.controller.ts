import { NextFunction, Request, Response } from 'express';

class IndexController {
  rednerHomePage(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({ message: 'Helo World!' });
    } catch (err) {
      next(err);
    }
  }
}

export default IndexController;