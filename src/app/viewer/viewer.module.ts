import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewerComponent } from './viewer.component';
import { ViewportDirective } from './directives/viewport.directive';
import { ToolsService } from './services/tools.service';
import { SelectionLoggerService } from "./services/selection-logger.service";


@NgModule({
  declarations: [
    ViewerComponent,
    ViewportDirective,
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule
  ],
  providers: [
    SelectionLoggerService,
    ToolsService
  ]
})
export class ViewerModule { }
