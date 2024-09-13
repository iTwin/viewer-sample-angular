/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
// This file is replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.local.ts`.
// The list of file replacements can be found in `angular.json`.

import { BrowserAuthorizationClientConfiguration } from "@itwin/browser-authorization";

export interface EnvironmentOptions {
  production: boolean;
  authorization: BrowserAuthorizationClientConfiguration;
  iTwinId: string;
  iModelId: string;
  map: {
    bingKey: string;
  };
}

export const environment = {
  production: false,
  authorization: {
    clientId: "",
    scope: "itwin-platform",
    redirectUri: "http://localhost:3000/", // please note trailing "/" matters between this and app registration config
    postSignoutRedirectUri: "http://localhost:3000/",
    responseType: "code",
    authority: "https://ims.bentley.com"
  },
  iTwinId: "",
  iModelId: "",
  map: {
    bingKey: ""
  }
};