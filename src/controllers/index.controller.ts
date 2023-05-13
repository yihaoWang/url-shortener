import { NextFunction, Request, Response } from 'express';

import config from '../config';
import { UrlShortenerModule } from '../modules/url-shortener.module';

class IndexController {
  private urlShortenerModule: UrlShortenerModule;

  constructor(urlShortenerModule: UrlShortenerModule) {
    this.urlShortenerModule = urlShortenerModule;
  }

  rednerHomePage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render('index', { domain: config.appDomain });
    } catch (err) {
      next(err);
    }
  }

  async redirectURL(req: Request, res: Response, next: NextFunction) {
    try {
      const hash = req.query.hash as string;

      if (!hash) {
        return res.status(400).json({ message: 'Invalid Hash' });
      }

      const result = await this.urlShortenerModule.getByHash(hash);

      if (!result) {
        return res.status(400).json({ message: 'Invalid Hash' });
      }

      return res.redirect(301, result.original_url);
    } catch (err) {
      return next(err);
    }
  }
}

export default IndexController;
