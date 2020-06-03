import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1588841843406_1416";

  // add your egg config in here
  config.middleware = ["graphql"];

  config.graphql = {
    router: "/graphql",
    app: true, // 加载到agent上
    agent: true,
    graphiql: true,
    apolloServerOptions: {
      tracing: true,
      debug: true,
    },
  };

  config.github = {
    login_url: "https://github.com/login/oauth/authorize",
    client_id: "d96b4dc6b377ac0b39d5",
    client_secret: "4fd5be66e2d04d2b2bc4175230682585b8876513",
    scope: ["user"],
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.security = {
    csrf: {
      ignore: () => true,
    },
  };

  config.view = {
    mapping: {
      ".html": "ejs",
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
