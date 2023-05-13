interface IConfig {
  instanceId: number | undefined;
  appDomain: string,
}

const DEFAULT_SHORTENER_DOMAIN = 'http://localhost:3000';
const config: IConfig = {
  instanceId: parseInt(process.env.INSTANCE_ID || '1', 10),
  appDomain: process.env.SHORTENER_DOMAIN || DEFAULT_SHORTENER_DOMAIN,
};

export default config;
