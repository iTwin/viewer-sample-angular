/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.local.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authorization: {
    clientId: "",
    scope: "",
    redirectUri: "http://localhost:3000/signin-callback",
    postSignoutRedirectUri: "http://localhost:3000/logout",
    responseType: "code",
    authority: "https://ims.bentley.com"
  },
  iTwinId: "",
  iModelId: "",
  map: {
    bingKey: ""
  }
};