import { NextFunction, Request, Response } from 'express';

import config from '../config';

class IndexController {
  rednerHomePage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render('index', { domain: config.appDomain });
    } catch (err) {
      next(err);
    }
  }
}

export default IndexController;
