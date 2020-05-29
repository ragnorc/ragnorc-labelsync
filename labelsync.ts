import { labelsync, repo } from "label-sync";

/* Repository */
import { prisma } from "./repos/prisma";
import { github } from "./repos/github";

/* Config */
labelsync({
  repos: {
    /* Check presets in the repos folder. */
    // prisma,
    // github,
    /* Personalized repositories */
    fnlp2: repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
    iaml: repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
    cs3: repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
    cs2: repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
  },
});
