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
      const { longUrl }: { longUrl: string } = req.body;

      if (!longUrl || !this.urlValiderModule.isValid(longUrl)) {
        return res.status(400).json({ message: 'Invalid URL' });
      }

      const fullUrl = this.urlValiderModule.getFullUrl(longUrl);
      const hash = this.idGenerator.generateShortUrl();

      await this.urlShortenerModule.create({ original_url: fullUrl, hash });

      return res.status(200).json({ url: fullUrl, hash });
    } catch (err) {
      return next(err);
    }
  }
}

export default ShortenerController;
