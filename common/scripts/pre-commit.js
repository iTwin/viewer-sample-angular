/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
const lintStaged = require("lint-staged");

async function preCommit() {
  const success = await lintStaged({
    config: {
      "*.{ts,tsx}": [
        "node ./common/scripts/copyright-linter.js --",
      ],
    },
    verbose: true,
  });

  if (!success) {
    process.exit(1);
  }
}

preCommit();
