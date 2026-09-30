
module.exports = {
    apps: [
      {
        name: "test-deploy",
        exec_mode: "cluster",
        instances: "1",
        script: ".output/server/index.mjs",
        env: {
          PORT: 2212,
          NODE_ENV: "production",
        },
      },
    ],
  };