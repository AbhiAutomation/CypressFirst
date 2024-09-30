
// import '@testing-library/cypress/add-commands';
export class LoginPage {

	private css = {
		usernameField: 'input[id="LoginForm__UsernameField--Standard"]',
		passwordField: 'input[id="LoginForm__PasswordField--Standard"]',
		hostNameField: 'input[id="LoginForm__HostnameField--Standard"]',
		ssoLoginButton: '#kc-login',
		logo: 'svg path:nth-child(2)',
		errorMessage: 'p[id*="Login__Message--Invalid"]',
		ssoUsernameField: 'input[id="username"]',
		ssoPasswordField: 'input[id="password"]',
		adminUsernameField: 'input[id="LoginForm__UsernameField--Admin"]',
		adminPasswordField: 'input[id="LoginForm__PasswordField--Admin"]',
		adminHostnameField: 'input[id="LoginForm__HostnameField--Admin"]',
		AdministrationLoginButton: '#LoginForm__Button--AdminLogin',
		valueFromDropDown: 'ul[role="listbox"] li',
	};

	private text = {
		loginButton: 'Login',
		AdministrationloginLink: 'Administrator Login'
	};
	
	private xpath = {
		tenantSelectField: '//div[@id="tenant-role"]',
		switchRolesAndLogoutButton:'//button[text()="Switch Role and Logout"]'
	};


	getUserNameField() {
		return cy.get(this.css.usernameField);
	}

	getPasswordField() {
		return cy.get(this.css.passwordField);
	}

	getHostnameField() {
		return cy.get(this.css.hostNameField);
	}

	getSocotraLogo() {
		return cy.get(this.css.logo);
	}

	enterUsername(username: string) {
		cy.get(this.css.usernameField).clear().type(username);
	}

	enterPassword(password: string) {
		cy.get(this.css.passwordField).clear().type(password, { log: false });
	}

	enterSsoUsername(username: string) {
		cy.get(this.css.ssoUsernameField).type(username);
	}

	enterSsoPassword(password: string) {
		cy.get(this.css.ssoPasswordField).type(password, { log: false });
	}

	// clickLoginButton() {
	// 	cy.findByText(this.text.loginButton).click();
	// }

	// getLoginButton() {
	// 	return cy.findByText(this.text.loginButton);
	// }

	getErrorMessageText() {
		return cy.get(this.css.errorMessage);
	}

	enterTenantHostName(hostname: string) {
		cy.get(this.css.hostNameField).clear().type(hostname);
	}

	verifyLoginPageElements() {
		cy.get(this.css.usernameField).should('be.visible');
		cy.get(this.css.passwordField).should('be.visible');
		cy.get(this.css.hostNameField).should('be.visible');
		cy.get(this.css.logo).should('be.visible');
//		cy.findByText(this.text.loginButton).should('be.visible');
	}

	tenantUserLogin(username: string, password: string, hostname: string) {
		this.enterUsername(username);
		this.enterPassword(password);
		this.enterTenantHostName(hostname);
	//	this.clickLoginButton();
	}

	tenantUserLoginDefault(hostname: string) {
		this.enterUsername(Cypress.env('EMPLOYEE_USER_NAME'));
		this.enterPassword(Cypress.env('EMPLOYEE_USER_PASSWORD'));
		this.enterTenantHostName(hostname);
	//	this.clickLoginButton();
	}

	dbInternalTenantUserLogin(dbUsername: string, dbPassword: string, dbHostname: string) {
		this.enterUsername(dbUsername);
		this.enterPassword(dbPassword);
		this.enterTenantHostName(dbHostname);
	//	this.clickLoginButton();
	}

	ssoUserLogin(username: string, password: string) {
		this.enterSsoUsername(username);
		this.enterSsoPassword(password);
		this.clickKcLoginButton();
	}

	clickKcLoginButton() {
		cy.get(this.css.ssoLoginButton).click();
	}

	tenantLogin() {
		this.enterUsername(Cypress.env('EMPLOYEE_USER_NAME'));
		this.enterPassword(Cypress.env('EMPLOYEE_PASSWORD'));
		this.enterTenantHostName(Cypress.env('TENANT_HOSTNAME'));
//		this.clickLoginButton();
	}

	dbInternalTenantLogin() {
		this.enterUsername(Cypress.env('DB_INT_EMPLOYEE_USER_NAME'));
		this.enterPassword(Cypress.env('DB_INT_EMPLOYEE_PASSWORD'));
		this.enterTenantHostName(Cypress.env('DB_INT_TENANT_HOSTNAME'));
//		this.clickLoginButton();
	}

	tenantCancellationLogin() {
		this.enterUsername(Cypress.env('EMPLOYEE_USER_NAME'));
		this.enterPassword(Cypress.env('EMPLOYEE_PASSWORD'));
		this.enterTenantHostName(Cypress.env('TENANT_HOSTNAME'));
//		this.clickLoginButton();
	}

	clickAdministratorLoginLink() {
//		cy.findByText(this.text.AdministrationloginLink).click();
	}

	verifyAdminLoginPageElements() {
		cy.get(this.css.adminUsernameField).should('be.visible');
		cy.get(this.css.adminPasswordField).should('be.visible');
		cy.get(this.css.logo).should('be.visible');
		cy.get(this.css.AdministrationLoginButton).should('be.visible');
	}

	enterAdminUsername(username: string) {
		cy.get(this.css.adminUsernameField).type(username);
	}

	enterAdminPassword(password: string) {
		cy.get(this.css.adminPasswordField).type(password, { log: false });
	}

	enterAdminHostName(hostName: string) {
		cy.get(this.css.adminHostnameField).clear().type(hostName);
	}

	clickAdministrationLoginButton() {
		cy.get(this.css.AdministrationLoginButton).click();// new lnine
	}

	tenantAdminLogin(username: string, password: string, hostName: string) {
		this.enterAdminUsername(username);
		this.enterAdminPassword(password);
		this.enterAdminHostName(hostName);
		this.clickAdministrationLoginButton();
	}

	loginToTenantAdministration(username: string, password: string, hostName: string) {
		cy.log('Login to Tenant Admin');
		this.clickAdministratorLoginLink();
		this.enterAdminUsername(username);
		this.enterAdminPassword(password);
		this.enterAdminHostName(hostName);
		this.clickAdministrationLoginButton();
	}

	tenantAdminLoginDefault(hostName: string) {
		this.loginToTenantAdministration(Cypress.env('CONFIG_TESTER_USERNAME'), Cypress.env('CONFIG_TESTER_PASSWORD'), hostName);
	}

	clickSwitchRolesAndLogoutButton(){
		cy.xpath(this.xpath.switchRolesAndLogoutButton).click();

	}
	
	selectTenantField(tenant: string){
		cy.xpath(this.xpath.tenantSelectField).click({force:true});
		cy.get(this.css.valueFromDropDown).contains(tenant).click();
		this.clickSwitchRolesAndLogoutButton();
	}

	
}