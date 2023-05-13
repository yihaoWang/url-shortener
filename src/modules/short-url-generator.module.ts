import { Snowflake } from 'nodejs-snowflake';
import { base58 } from '@scure/base';

import config from '../config';

export class ShortUrlGenerator {
  private uid: Snowflake;

  constructor() {
    this.uid = new Snowflake({
      instance_id: config.instanceId,
    });
  }

  public generateShortUrl() {
    const id = this.uid.getUniqueID();
    const hashId = base58.encode(new Uint8Array(Buffer.from(id.toString(), 'hex')));

    return hashId;
  }
}

const shortUrlGenerator = new ShortUrlGenerator();

export default shortUrlGenerator;
