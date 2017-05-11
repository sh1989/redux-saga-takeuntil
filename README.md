# Redux Saga takeUntil

Redux-Saga takeUntil is a utility that is useful if you wish to start a saga when a particular action is dispatched, and then cancel it when another action is dispatched.

Consider the scenario when you have some saga functions which you would only like to be run following a particular action being dispatched, but only until another action is dispatched. Example scenarios include:
* When a user navigates to a page, run some sagas. Stop them when the user navigates elsewhere.
* When a form is created, run some sagas related to the form. Stop them when the form is destroyed.

## Usage

1. `npm install --save redux-saga-takeuntil`
2. `import { takeUntil } from 'redux-saga-takeuntil`
3. In a saga, invoke takeUntil, passing:
   - a `String` identifying the action which will START your saga.
   - a `String` identifying the action which will STOP your saga.
   - a Generator `Function` which will be invoked on the START action. This generator may itself `yield` further sagas, creating a "tree" of sagas which are brought into scope on your START action, and cancelled and taken out of scope when the STOP action is dispatched.

For a full example, built with `create-react-app`, checkout the `demo` branch.
