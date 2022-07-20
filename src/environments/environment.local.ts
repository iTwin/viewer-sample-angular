/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
// REPLACE WITH YOUR CLIENT FROM https://developer.bentley.com/register/
export const environment = {
  production: false,
  authorization: {
    clientId: "",
    scope: "imodelaccess:read imodels:read realitydata:read",
    redirectUri: "http://localhost:3000",
    postSignoutRedirectUri: "http://localhost:3000",
    responseType: "code",
    authority: "https://ims.bentley.com"
  },
  iTwinId: "",
  iModelId: "",
  map: {
    bingKey: ""
  }
};