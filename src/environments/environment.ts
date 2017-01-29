// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
import { AuthProviders, AuthMethods } from 'angularfire2';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyC4F31Opyhn4dGkErl5dSYY6cTpxmPl6J0',
    authDomain: ' dinewithus-4019a.firebaseio.com',
    databaseURL: 'https://dinewithus-4019a.firebaseio.com/',
    storageBucket: ''
  },
  firebaseAuthConfig: {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  },
  backend: 'api/mobility-platform',
};