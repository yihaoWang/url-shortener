import { NextFunction, Request, Response } from 'express';
import validUrl from 'valid-url';

import { ShortUrlGenerator } from '../modules/short-url-generator.module';

class ShortenerController {
  private idGenerator: ShortUrlGenerator;

  constructor(idGenerator: ShortUrlGenerator) {
    this.idGenerator = idGenerator;
  }

  shortURL(req: Request, res: Response, next: NextFunction) {
    try {
      const { url }: { url: string } = req.body;

      if (!url || !validUrl.isWebUri(url)) {
        return res.status(400).json({ message: 'Invalid URL' });
      }

      const hash = this.idGenerator.generateShortUrl();

      return res.status(200).json({ hash });
    } catch (err) {
      return next(err);
    }
  }
}

export default ShortenerController;
