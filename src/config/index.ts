interface IConfig {
  instanceId: number | undefined;
  appDomain: string,
}

const DEFAULT_APP_DOMAIN = 'http://localhost:3000';
const config: IConfig = {
  instanceId: parseInt(process.env.INSTANCE_ID || '0', 10),
  appDomain: process.env.URL_SHORTENER_DOMAIN || DEFAULT_APP_DOMAIN,
};

export default config;
