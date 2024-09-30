/// <reference types="cypress" />
// tslint:disable-next-line: no-reference
/// <reference path="../support/index.d.ts" />
import 'cypress-plugin-tab';
import '@cypress/grep'
//import { LoginPage, HomePage, DashboardPage, RestApiUtils, AssertionUtils } from '../support/e2e';
import { LoginPage, HomePage,DashboardPage,AssertionUtils } from '../support/e2e'

const loginPage = new LoginPage();
const homePage = new HomePage();
const dashboardPage = new DashboardPage();
const username = Cypress.env('EMPLOYEE_USER_NAME');
const password = Cypress.env('EMPLOYEE_PASSWORD');
let  hostname: string ;
const errorMessage: string = 'Unable to log in. Verify your information and try again.';
describe('Login Test Suite', () => {
	
	// before('Deploy tenant configuration', () => {
	// 	cy.clearDownloadsFolder();
	// 	cy.log('Deploying new config');
	// 	RestApiUtils.deployConfiguration(Cypress.env('TOKEN_API_URL'), 'config/fe-v2_automation.zip', Cypress.env('STUDIO_URL')).then((response: any) => {
	// 		cy.log(response.status + ': Status code');
	// 		expect(response.status).to.equal(200);
	// 		const dec = new TextDecoder();
	// 		const result = dec.decode(response.body);
	// 		expect(result).to.contain('hostname');
	// 		let deployResponse = JSON.parse(result);
	// 		hostname = deployResponse['hostname'];
	// 	});
	// });

	beforeEach(() => {
		cy.visit(Cypress.env('SOCOTRA_FRONTEND_URL'));
	});

	it('C35361: Login Logout Test', { tags: ['P1', 'Login', 'C35361'] }, () => {
		loginPage.tenantUserLogin(Cypress.env('EMPLOYEE_USER_NAME'), Cypress.env('EMPLOYEE_USER_PASSWORD'), hostname);
		homePage.getUserDetails().then((details: any) => {
			expect(details.text().toLowerCase()).to.equal('alice lee');
		});
		dashboardPage.getOnRiskPoliciesCount().should('be.visible');
		homePage.clickUserDropDown();
		homePage.getHostName().should('contain.text', hostname.split('.')[0]);
		homePage.clickLogout();
		loginPage.getLoginButton().should('be.visible');
	});

	it('C35364: Verify Login Page Elements', { tags: ['P1', 'Login', 'C35364'] }, () => {
		loginPage.verifyLoginPageElements();
	});

	it('C35362: Login with Invalid Username', { tags: ['P1', 'Login', 'C35362'] }, () => {
		const invalidUsername: string = 'alice.wonderland';
		loginPage.tenantUserLogin(invalidUsername, password, hostname);
		loginPage.getErrorMessageText().should('be.visible').should('have.text',errorMessage);
	});

	it('C35362: Login with Invalid Password', { tags: ['P1', 'Login', 'C35362'] }, () => {
		const invalidPassword: string = 'WrongPassword';
		loginPage.tenantUserLogin(username, invalidPassword, hostname);
		loginPage.getErrorMessageText().should('be.visible').should('have.text',errorMessage);
	});

	it('C74852: Verify Change password as tenant user with valid credentials', { tags: ['P1', 'Login', 'C74852'] }, () => {
		const newPassword: string = Cypress.env('EMPLOYEE_PASSWORD');
		const oldPassword: string = Cypress.env('EMPLOYEE_USER_PASSWORD');
		loginPage.tenantUserLogin(Cypress.env('EMPLOYEE_USER_NAME'), Cypress.env('EMPLOYEE_USER_PASSWORD'), hostname);
		homePage.getUserDetails().then((details: any) => {
			expect(details.text().toLowerCase()).to.equal('alice lee');
		});
		homePage.clickUserDropDown();
		homePage.clickChangePassword();
		homePage.enterOldPassword(oldPassword);
		homePage.enterNewPassword(newPassword);
		// homePage.enterConfirmPassword(newPassword);
		homePage.clickUpdatePassword();
		loginPage.getLoginButton().should('be.visible');
		AssertionUtils.verifySuccessMessageBanner('Successfully changed password & logged out');
	});

	it('C74853: Verify Change password as tenant user with invalid credentials', { tags: ['P1', 'Login', 'C74853'] }, () => {
		const newPassword: string = 'Soco';
		const oldPassword: string = 'Socotra123$%1234^';
		loginPage.tenantUserLogin(Cypress.env('EMPLOYEE_USER_NAME'), Cypress.env('EMPLOYEE_PASSWORD'), hostname);
		homePage.getUserDetails().then((details: any) => {
			expect(details.text().toLowerCase()).to.equal('alice lee');
		});
		homePage.clickUserDropDown();
		homePage.clickChangePassword();
		homePage.enterOldPassword(oldPassword);
		homePage.enterNewPassword(newPassword);
		// homePage.enterConfirmPassword(newPassword);
		cy.log('Verify week password message');
		homePage.verifyNewPasswordStrength().should('contain.text', 'Weak');
		homePage.clickUpdatePassword();
		cy.log('Verify incorrect password message');
		AssertionUtils.verifyErrorMessageBanner('Incorrect old password');
	});

	it('C35364: Tab and Shift+Tab order verifications', { tags: ['P1', 'Login', 'C35364'] }, () => {
		cy.wait(3000);
		cy.tab();
		cy.focused().should('have.attr', 'id', 'LoginForm__UsernameField--Standard');
		cy.tab();
		cy.focused().should('have.attr', 'id', 'LoginForm__PasswordField--Standard');
		cy.tab();
		cy.focused().should('have.attr', 'id', 'LoginForm__PasswordVisibilityToggle--Standard');
		cy.tab();
		cy.focused().should('have.attr', 'id', 'LoginForm__HostnameField--Standard');
		cy.tab();
		cy.focused().should('have.attr', 'href', 'https://docs.socotra.com/production/tooling/single-sign-on.html?highlight=sso');
		cy.tab();
		cy.focused().should('have.text', 'Login');
		cy.tab({ shift: true });
		cy.focused().should('have.attr', 'href', 'https://docs.socotra.com/production/tooling/single-sign-on.html?highlight=sso');
		cy.tab({ shift: true });
		cy.focused().should('have.attr', 'id', 'LoginForm__HostnameField--Standard');
		cy.tab({ shift: true });
		cy.focused().should('have.attr', 'id', 'LoginForm__PasswordVisibilityToggle--Standard');
		cy.tab({ shift: true });
		cy.focused().should('have.attr', 'id', 'LoginForm__PasswordField--Standard');
		cy.tab({ shift: true });
		cy.focused().should('have.attr', 'id', 'LoginForm__UsernameField--Standard');
	});
});