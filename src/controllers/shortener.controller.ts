import { NextFunction, Request, Response } from 'express';
import validUrl from 'valid-url';

import { ShortUrlGenerator } from '../modules/short-url-generator.module';
import { UrlShortenerModule } from '../modules/url-shortener.module';

class ShortenerController {
  private idGenerator: ShortUrlGenerator;

  private urlShortenerModule: UrlShortenerModule;

  constructor(idGenerator: ShortUrlGenerator, urlShortenerModule: UrlShortenerModule) {
    this.idGenerator = idGenerator;
    this.urlShortenerModule = urlShortenerModule;
  }

  async shortURL(req: Request, res: Response, next: NextFunction) {
    try {
      const { url }: { url: string } = req.body;

      if (!url || !validUrl.isWebUri(url)) {
        return res.status(400).json({ message: 'Invalid URL' });
      }

      const hash = this.idGenerator.generateShortUrl();

      await this.urlShortenerModule.create({ original_url: url, hash });

      return res.status(200).json({ hash });
    } catch (err) {
      return next(err);
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

export default ShortenerController;
