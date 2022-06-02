const { defineConfig } = require("cypress");
const getBaseUrl = (environment) => {
  switch (environment) {
    case "dev":
      return "https://google.com";
    case "qa":
      return "https://google.com";
    case "pre-prod":
      return "https://google.com";
    default:
      return "https://google.com";
  }
};

const getIntegrationFolder = (teamName) => {
  switch (teamName) {
    case "plasma":
      return "cypress/e2e/plasma";
    case "rocket":
      return "cypress/e2e/rocket";
    case "skull":
      return "cypress/e2e/skull";
    default:
      return "cypress/e2e";
  }
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = getBaseUrl(config.env.environment);
      config.specPattern = getIntegrationFolder(config.env.team);

      return config;
    },
  },
});
