// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands';
import 'cypress-xpath';

export { AssertionUtils } from '../utils/AssertionUtils';
export { LoginPage } from '../pages/LoginPage';
export { HomePage } from '../pages/HomePage';
export {DashboardPage} from '../pages/DashboardPage';
export { SamplePage} from '../pages/SamplePage';
// Alternatively you can use CommonJS syntax:
// require('./commands')
import { clearDownloadsFolder } from './commands/clearDownloadsFolder';
Cypress.Commands.add('clearDownloadsFolder', clearDownloadsFolder);
