interface IConfig {
  instanceId: number | undefined;
  appDomain: string,
}

const DEFAULT_ADD_DOMAIN = 'http://localhost:3000';
const config: IConfig = {
  instanceId: parseInt(process.env.INSTANCE_ID || '0', 10),
  appDomain: process.env.INSTANCE_ID || DEFAULT_ADD_DOMAIN,
};

export default config;
