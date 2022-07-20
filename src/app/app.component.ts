/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this._checkConfig();
  }

  private _checkConfig() {
    if (!environment.authorization?.clientId)
      throw new Error('Missing authorization clientId in src/environments/environment.local.ts');
    if (!environment.authorization?.redirectUri)
      throw new Error('Missing authorization redirectUri in src/environments/environment.local.ts');
  }

}
