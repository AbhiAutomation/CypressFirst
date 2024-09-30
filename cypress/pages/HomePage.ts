export class HomePage {

	private css = {
		userDropDown: '#AppBar__Button--UserActionsDropdown svg',
		adminUserDropDown: '#AppBar__Button--UserDropdown',
		oldPasswordField:'input[data-testid="password-change--oldPassword"]',
		newPasswordField:'input[data-testid="password-change--password"]',
		newPasswordStrength:'span[data-testid="password-change--strength-score"]',
		confirmPasswordField:'input[data-testid="password-change--confirmPassword"]',
		paymentsLink: '[id="AppBar__Buttons--Payments"]'
		
	};

	private text = {
		dashboardText: 'Dashboard'
	};
	
	private xpath = {
		createButton: '//button[@id="AppBar__Buttons--CreateDropdown"]',
		createPolicyHolderLink: '//button[text()="New Policyholder"]',
		policiesDropDown: '//li[text()="Policies "]',
		reportsMenuLink: '//a[text()="Reports"]',
		logoutButton: '//li[@id="UserActionsDropdown__ListAction--Logout"]//span[text()="Logout"]',
		changePasswordButton: '//li[@id="UserActionsDropdown__ListAction--ChangePassword"]//span[text()="Change Password"]',
		updatePassword:'//button[text()="Update Password"]',
		switchRolesAndLogoutLink:'//span[text()="Switch Roles and Logout"]',
		dashboardMessage: '//div/h3[text()="Overview"]/following-sibling::div//h6',
		userDetails: '//button[@id="AppBar__Button--UserActionsDropdown"]',
		confirmLogout:'//button[text()="Logout"]',
		hostName: '//li[@id="UserActionsDropdown__ListItem--Hostname"]//span',
		lastDeployed: '//li[@id="UserActionsDropdown__ListItem--LastDeployed"]//span'
	};

	getUserDetails() {
		return cy.xpath(this.xpath.userDetails);
	}

	getPaymentsMenuLink() {
		return cy.get(this.css.paymentsLink);
	}

	clickLogout() {
		cy.xpath(this.xpath.logoutButton).click();
		cy.xpath(this.xpath.confirmLogout).click();
	}

	clickSwitchRolesAndLogout(){
		cy.xpath(this.xpath.switchRolesAndLogoutLink).click();

	}
	clickChangePassword() {
		cy.xpath(this.xpath.changePasswordButton).click();
	}

	clickUpdatePassword() {
		cy.xpath(this.xpath.updatePassword).click();
	}

	clickPaymentsMenuLink() {
		cy.get(this.css.paymentsLink).click();
	}
	
	enterOldPassword(password: string) {
		cy.get(this.css.oldPasswordField).type(password, { log: false });
	}

	enterNewPassword(password: string) {
		cy.get(this.css.newPasswordField).type(password, { log: false });
	}
	enterConfirmPassword(password: string) {
		cy.get(this.css.confirmPasswordField).type(password, { log: false });
	}

	verifyNewPasswordStrength(){
		return cy.get(this.css.newPasswordStrength);
	}

	goToPolicyHolderPage() {
		cy.xpath(this.xpath.createButton).click();
		cy.xpath(this.xpath.createPolicyHolderLink).click();
	}

	getCreateButton() {
		return cy.xpath(this.xpath.createButton);
	}

	getPoliciesMenuLink() {
		return cy.xpath(this.xpath.policiesDropDown);
	}

	getReportsMenuLink() {
		return cy.xpath(this.xpath.reportsMenuLink);
	}

	getDashboardMessage() {
		return cy.xpath(this.xpath.dashboardMessage);
	}

	getDashboard() {
		return cy.findByText(this.text.dashboardText);
	}

	clickUserDropDown(){
		cy.get(this.css.userDropDown).eq(0).click();
	}

	clickAdminUserDropDown(){
		cy.get(this.css.adminUserDropDown).eq(0).click();
	}

	getHostName(){
		return cy.xpath(this.xpath.hostName);
	}

	getLastDeployed(){
		return cy.xpath(this.xpath.lastDeployed);
	}

	getCreatePolicyHolderLink() {
		return cy.xpath(this.xpath.createPolicyHolderLink);
	}

	clickCreateButton() {
		cy.xpath(this.xpath.createButton).click();
	}

	clickCreatePolicyHolderLink(){
		cy.xpath(this.xpath.createPolicyHolderLink).click();
	}
}