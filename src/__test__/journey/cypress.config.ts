import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "iban-validator",
  e2e: {
    supportFile: "support/journey.ts",
    supportFolder: "support/journey",
    specPattern: "journeys/*.{js,jsx,ts,tsx}",
  },
});
