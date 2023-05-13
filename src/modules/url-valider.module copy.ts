const urlRegex = /^(https?:\/\/|ftp:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{2,5})?([/?].*)?$/i;
const urlPrefix = /^(https?:\/\/|ftp:\/\/)/i;

export class UrlValiderModule {
  isValid(url: string): boolean {
    return urlRegex.test(url);
  }

  getFullUrl(url: string): string {
    return urlPrefix.test(url) ? url : `https://${url}`;
  }
}

const urlValiderModule = new UrlValiderModule();

export default urlValiderModule;
