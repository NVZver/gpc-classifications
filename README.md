# What was done
- Analysed data structure
- Designed basic design to display all the information
- Implemented initial angular module and covered by unit-tests
- Using decomposition the module was broken down into several stateless components
- Moved unit-tests to the related components

# What I would do for production
- Before designing the design, discuss this initial implementation with the state holders:
  - All the functionality they would like to see in this module, what is the user's workflow (because it's not quite clear from the description)
  - Cover corner cases
  - Implement initial design in an app like Abstract or Sketch
  - Discuss accessibility
- Design a better routing system, because now everything is on one URL
- Implement Angular Forms with validators for editing localisedContent
- Come up with a better design to improve user experience
- Finish services to do actually BE requests
- Cover all public API by unit-test to meet code coverage of at least 85%
- Implement e2e tests to validate routing, API requests
- Implement visual tests to validate that all views are according to the design


# GpcClassifications

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

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
