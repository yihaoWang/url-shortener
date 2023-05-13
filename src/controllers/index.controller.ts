import { NextFunction, Request, Response } from 'express';

class IndexController {
  rednerHomePage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render('index');
    } catch (err) {
      next(err);
    }
  }
}

export default IndexController;
