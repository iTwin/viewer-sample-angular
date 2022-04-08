import { Injectable } from '@angular/core';
import {
    GeometrySummaryRequestProps, GeometrySummaryVerbosity, IModelReadRpcInterface
} from '@itwin/core-common';

import type { IModelConnection, SelectionSetEvent } from "@itwin/core-frontend";

/**
 * logs information about the selected elements to the console 
 */
@Injectable()
export class SelectionLoggerService {

  /**
  * log info about the selected elements to the console
  */
  public onSelectionChanged = async (iModel: IModelConnection, evt: SelectionSetEvent) => {
    const elementIds = Array.from(evt.set.elements);
    const request: GeometrySummaryRequestProps = {
      elementIds,
      options: {
        geometryVerbosity: GeometrySummaryVerbosity.Detailed,
        includePlacement: true,
      },
    };
    const geometryString = await IModelReadRpcInterface.getClientForRouting(
      iModel.routingContext.token
    ).getGeometrySummary(iModel.getRpcProps(), request);

    console.log(geometryString); // eslint-disable-line no-console
    elementIds.forEach(async (elementId) => {
      const tooltipString = await IModelReadRpcInterface.getClientForRouting(
        iModel.routingContext.token
      ).getToolTipMessage(iModel.getRpcProps(), elementId);
      console.log(tooltipString); // eslint-disable-line no-console
    });
  };
}
