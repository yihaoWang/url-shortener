import { NextFunction, Request, Response } from 'express';

import { ShortUrlGenerator } from '../modules/short-url-generator.module';
import { UrlShortenerModule } from '../modules/url-shortener.module';
import { UrlValiderModule } from '../modules/url-valider.module copy';

class ShortenerController {
  private idGenerator: ShortUrlGenerator;

  private urlShortenerModule: UrlShortenerModule;

  private urlValiderModule: UrlValiderModule;

  constructor(
    idGenerator: ShortUrlGenerator,
    urlShortenerModule: UrlShortenerModule,
    urlValiderModule: UrlValiderModule,
  ) {
    this.idGenerator = idGenerator;
    this.urlShortenerModule = urlShortenerModule;
    this.urlValiderModule = urlValiderModule;
  }

  async shortURL(req: Request, res: Response, next: NextFunction) {
    try {
      const { url }: { url: string } = req.body;

      if (!url || !this.urlValiderModule.isValid(url)) {
        return res.status(400).json({ message: 'Invalid URL' });
      }

      const fullUrl = this.urlValiderModule.getFullUrl(url);
      const hash = this.idGenerator.generateShortUrl();

      await this.urlShortenerModule.create({ original_url: fullUrl, hash });

      return res.status(200).json({ url: fullUrl, hash });
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
