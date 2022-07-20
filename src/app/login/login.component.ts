/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '@shared/services/authorization.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="center">
      <span>Signing in...</span>
    </div>
  `,
  styles: [
    ".center {  position: absolute;  top: 50%;  left: 50%; }",
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._signIn();
  }

  private async _signIn() {
    try {
      const signedIn = await this.authService.signIn();
      if (signedIn) {
        this.router.navigateByUrl("/viewer");
      }
    } catch(e) {
      // handle sign in errors here
      console.log(e);
    }
  }

}
