import type { IModelConnection } from "@itwin/core-frontend"

export type ViewportProps = {
  /** viewport's imodel connection */
  imodelConnection: IModelConnection,
  /** viewport <div> */
  viewportDiv: HTMLDivElement,
  /** id of this specific viewport */
  viewportId: string
}