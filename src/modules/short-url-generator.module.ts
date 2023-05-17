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
    const hexString = this.uid.getUniqueID().toString(16);
    const paddedHexString = hexString.length % 2 === 0 ? hexString : `0${hexString}`;
    const hashId = base58.encode(new Uint8Array(Buffer.from(paddedHexString, 'hex')));

    return hashId;
  }
}

const shortUrlGenerator = new ShortUrlGenerator();

export default shortUrlGenerator;
