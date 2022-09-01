# viewer-sample-angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

1. Copy [the environment file](./src/environments/environment.ts) in src/environments and name it `enviroment.local.ts`.
   When the project is built, `enviroment.ts` will be replaced with the contents of `enviroment.local.ts`.
   At a minimum, all auth client information as well as an iTwinId and iModelId are required to run the application. If you do not already have an iTwin application client id, you can obtain one [here](https://developer.bentley.com/register/).

- Your client should include the following:
  - API Associations
  - Visualization - enable the `imodelaccess:read` scope
  - iModels - enable the `imodels:read` scope
  - Reality Data - enable the `realitydate:read` scope
  - Application type - SPA
  - Redirect URIs - `http://localhost:3000`

2. Run `npm start` for a development server.
   The application will redirect you to Bentley's sign in pages if you are not signed in already.
   The application will automatically reload if you change any of the source files.

3. Navigate to `http://localhost:3000` in your browser.

## Viewport Directive

The [Viewport Directive](./src/app/viewer/directives/viewport.directive.ts) will initialize an iTwin.js viewport in the `<div>` specified:

```html
<div
  appViewport
  [viewportId]="'a unique ID'"
  [iTwinId]="0d6522b9-f6b3-4b28-af72-aaae84a74a82"
  [iModelId]="06e9d085-552f-4ac7-821e-0ce4588b49e2"
  (initialized)="doSomethingToViewport($event)"
></div>
```

- [IModelApp.startup](https://www.itwinjs.org/reference/core-frontend/imodelapp/imodelapp/startupstatic/) must be called before showing a viewport.
- The viewport div has to have a set width and height.
- If no iTwinId/iModelId are provided, the viewport will default to whatever was set in the environment file.
- `(initialized)` will call whichever function you provide with [ViewportProps](./src/app/shared/types/viewport-props.ts) after the viewport is initialized.

## Code scaffolding

Run `npx -p @angular/cli ng g component feature-name/component-name` to generate a new component. You can also use `npx -p @angular/cli ng g directive|pipe|service|class|guard|interface|enum|module`.

## Production Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
