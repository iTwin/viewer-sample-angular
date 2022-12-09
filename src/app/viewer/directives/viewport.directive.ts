/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { environment } from 'src/environments/environment';

import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { assert } from '@itwin/core-bentley';
import {
    CheckpointConnection, IModelApp, IModelConnection, ScreenViewport, ViewCreator3d
} from '@itwin/core-frontend';

import type { ViewportProps } from '@shared/types/viewport-props';
/**
 * The Viewport Directive attaches a iTwinjs viewport to a `<div>`.
 * IModelApp.startup() must be called before a viewport is initialized.  
 * E.g.,
 * ```
 * <div appViewport [viewportId]="'uniqueId'" [iTwinId]="xxxxxx-xxxx-xxxx-xxxx-xxxxxxxx" [iModelid]="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxx" (initialized)="doSomething($event)"></div>
 * ```
 * @Input viewportId is a unique Id to provide the viewport (useful if there is more than one)
 * @Input (optional) iTwinId is the ID associated with the imodel you would like to show in the viewport. Defaults to environment.iTwinId.
 * @Input (optional) iModelId is the ID of the imodel you would like to show in the viewport. Defaults to environment.iModel.
 * @Output initialized is an event which emits ViewportProps when the viewport has finished initializing.
 */
@Directive({
  selector: 'div[appViewport]'
})
export class ViewportDirective implements OnInit {

  @Input() viewportId!: string;
  @Input() iTwinId: string | undefined;
  @Input() iModelId: string | undefined;
  /** event emitted after viewport is initialized, emitting a reference to the imodel and viewport */
  @Output() initialized: EventEmitter<ViewportProps> = new EventEmitter();

  private _viewportDiv: HTMLDivElement;
  public _iModelConnection: IModelConnection | undefined;

  constructor(elem: ElementRef) {
    this._viewportDiv = elem.nativeElement;
  }

  ngOnInit(): void {
    this._createViewport(this.iTwinId || environment.iTwinId, this.iModelId || environment.iModelId);
  }

  public get viewportRef() {
    return this._viewportDiv;
  }

  private async _createViewport(iTwinId: string, iModelId: string) {
    // for development purposes only (to illustrate requirements)
    assert(IModelApp.initialized, "IModelApp.startup() must be called before a viewport can be initialized");
    assert(!!iTwinId, "No iTwinId provided.");
    assert(!!iModelId, "No iModelId provided.");
  
    const iModelConnection = await CheckpointConnection.openRemote(
      iTwinId,
      iModelId,
    );
    if (iModelConnection && this._viewportDiv) {
      // obtain a viewState for the model and add it to a Viewport within the container
      const viewCreator = new ViewCreator3d(iModelConnection);
      const viewState = await viewCreator.createDefaultView();
      const vp = ScreenViewport.create(this._viewportDiv, viewState);
      IModelApp.viewManager.addViewport(vp);
      this._iModelConnection = iModelConnection;
      this.initialized.emit({ 
        imodelConnection: iModelConnection,
        viewportDiv: this._viewportDiv,
        viewportId: this.viewportId,
        vp,
      });
    }
  }

}
