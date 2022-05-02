/// <reference types="cypress" />

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
      return "cypress/integration/plasma";
    case "rocket":
      return "cypress/integration/rocket";
    case "skull":
      return "cypress/integration/skull";
    default:
      return "cypress/integration";
  }
};

module.exports = (on, config) => {
  config.baseUrl = getBaseUrl(config.env.environment);
  config.integrationFolder = getIntegrationFolder(config.env.team);

  return config;
};
