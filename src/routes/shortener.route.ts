import ShortenerController from '../controllers/shortener.controller';
import shortUrlGenerator from '../modules/short-url-generator.module';
import Route from './route';

class ShortenerRoute extends Route {
  private shortenerController = new ShortenerController(shortUrlGenerator);

  constructor() {
    super();
    this.prefix = '/url';
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.post('/', this.shortenerController.shortURL.bind(this.shortenerController));
  }
}

export default ShortenerRoute;
