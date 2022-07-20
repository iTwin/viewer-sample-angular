/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import type { IModelConnection } from "@itwin/core-frontend"

export type ViewportProps = {
  /** viewport's imodel connection */
  imodelConnection: IModelConnection,
  /** viewport <div> */
  viewportDiv: HTMLDivElement,
  /** id of this specific viewport */
  viewportId: string
}