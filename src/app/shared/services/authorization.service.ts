/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import {
  BrowserAuthorizationClient,
  BrowserAuthorizationClientConfiguration
} from '@itwin/browser-authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private readonly _client: BrowserAuthorizationClient;
  private readonly _config: any;

  constructor() {
    (this._config as any) = environment.authorization;
    this._client = new BrowserAuthorizationClient(this._config);
  }

  public async signIn() {
    if (window.location.search.includes("code")) {
      await this._client.handleSigninCallback();
      return new Promise<boolean>((resolve, reject) => {
        this._client.onAccessTokenChanged.addOnce((token: string) => resolve(token !== ""));
        this._client.signIn().catch((err) => reject(err));
      });
    }
    await this._client.signIn();
    return
  }

  public get client() {
    return this._client;
  }

  public get signedIn() {
    return this._client.hasSignedIn;
  }

}
