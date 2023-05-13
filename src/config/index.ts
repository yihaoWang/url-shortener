interface IConfig {
  instanceId: number | undefined;
}

const config: IConfig = {
  instanceId: parseInt(process.env.INSTANCE_ID || '0', 10),
};

export default config;
