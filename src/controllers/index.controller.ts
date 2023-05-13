import { NextFunction, Request, Response } from 'express';

import config from '../config';
import { UrlShortenerModule } from '../modules/url-shortener.module';

const HASH_REGEX = /^\/([a-zA-Z0-9]*)$/i;

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
      const match = req.path.match(HASH_REGEX);
      const hash = match && match[1];

      if (!hash) {
        return res.redirect(301, '/app');
      }

      const result = await this.urlShortenerModule.getByHash(hash);

      if (!result) {
        return res.redirect(301, '/app');
      }

      return res.redirect(301, result.original_url);
    } catch (err) {
      return next(err);
    }
  }
}

export default IndexController;
