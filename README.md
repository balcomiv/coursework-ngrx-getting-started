# APM-Demo0

Starter files with no NgRx added.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Bundle Size

- https://dev.to/salimchemes/analyzing-angular-bundle-with-source-map-explorer-341

- https://stackoverflow.com/questions/46567781/angular-cli-output-how-to-analyze-bundle-files

- `npx source-map-explorer dist/APM/main-es2015.js`

- [Stephen Fluin - How to stay fast and fresh with Angular](https://youtu.be/B-lipaiZII8?t=215)

Summary of tips:

1. Turn on sourceMap and namedChunks in angular.json "configurations" for easier debugging
2. Split your app into modules for native Angular lazy loading
3. Use source-map-explorer to investigate bundle sizes. Angular team suggests to use this tool over any other for correct evaluation of the bundle. (source-map-explorer dist/fast-and-fresh/main-es2015.a15f8731.js)
4. Ensure you have consciously set the size "budgets" for your app, so that you don't unexpectedly increase your apps bundle size.
5. Keep your angular up-to-date using "ng update". It's best to do this in 2 steps - 1) update core packages @angular/cli @angular/core and then 2) the rest of the packages if there are no errors in step 1. ("ng update" will not only update the packages, but also will try to update your code. Angular update guide - update.angular.io)
