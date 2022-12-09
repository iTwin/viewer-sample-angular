/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
// This file is replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.local.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authorization: {
    clientId: "spa-jha7dN6UA8sJGCLdKKshzzfIH",
    scope: "imodelaccess:read imodels:read realitydata:read",
    redirectUri: "http://localhost:3000/",
    postSignoutRedirectUri: "http://localhost:3000/",
    responseType: "code",
    authority: "https://ims.bentley.com",
  },
  iTwinId: "7b1c22ff-ea4a-451d-b1fb-9d657262995a",
  iModelId: "4a07c2bb-5e05-4c8c-b89c-8e7142ead5f0",
  map: {
    bingKey: "",
  },
};
