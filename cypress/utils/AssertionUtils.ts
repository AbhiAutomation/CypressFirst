export class AssertionUtils {

	private static  xpath = {
		successMessage: '//div[contains(@class, "Toastify__toast Toastify__toast--success")]',
		successMessageText: '//div[contains(@class, "Toastify__toast--success toast-container")]/div[@class="Toastify__toast-body"]',
		errorMessageText: '//div[contains(@class, "Toastify__toast--error toast-container")]/div[@class="Toastify__toast-body"]',
		closeSuccessMessage: '//button[contains(@class, "Toastify__close-button--success")]',
		spinnerIcon: '//span[@role="progressbar"]'
	};

	public static verifyUrlContains(url: string) {
		cy.url().should('contain', url);
		cy.log(`Verified: Navigated to correct url : ${url}`);
	}

	public static verifyUrl(url: string) {
		cy.url().should('equal', url);
		cy.log('Verified: Navigated to correct url');
	}

	public static verifyTitle(title: string) {
		cy.title().should('include', title);
		cy.log('Verified: Correct Title is displayed');
	}

	public static assertText(locator: string, textValue: string) {
		cy.get(locator).should('have.text', textValue);
		cy.log('Verified: Element Text is correct');
	}

	public static assertValue(locator: any, textValue: string) {
		cy.get(locator).should('have.value', textValue);
		cy.log('Verified: Element Value is correct');
	}

	public static isElementVisible(locator: string) {
		cy.get(locator).should('be.visible');
		cy.log('Verified: Element is Visible');
	}

	public static waitForRequestToBeCompleted(request:string){
		cy.intercept(request).as('element');
		cy.wait('@element',{ timeout: 40000 });
	}

	public static waitForReportRequestToBeCompleted(request:string){
		cy.intercept(request).as('element');
		cy.wait('@element',{ timeout: 120000 });
	}

	public static waitForSpinnerToDisappear(){
		cy.xpath(this.xpath.spinnerIcon,{ timeout: 40000 }).should('not.exist');
	}

	public static verifySuccessMessageBanner(successMessage:string){
		cy.xpath(this.xpath.successMessage).should('be.visible');
		cy.xpath(this.xpath.successMessageText).eq(0).should('have.text', successMessage);
		// cy.xpath(this.xpath.closeSuccessMessage).click();
		// cy.xpath(this.xpath.successMessage).should('not.exist');
	}

	public static verifyErrorMessageBanner(errorMessage:string){
		cy.xpath(this.xpath.errorMessageText).should('be.visible');
		cy.xpath(this.xpath.errorMessageText).eq(0).should('have.text', errorMessage);
	}

	public static verifyBannerContainsErrorMessage(errorMessage:string){
		cy.xpath(this.xpath.errorMessageText).should('be.visible');
		cy.xpath(this.xpath.errorMessageText).eq(0).should('contain.text', errorMessage);
	}


	public static verifyErrorMessageBannerText(errorMessage:string){
		cy.xpath(this.xpath.errorMessageText).should('be.visible');
		cy.xpath(this.xpath.errorMessageText).eq(0).should('contain.text', errorMessage);
	}

	public static verifySuccessMessageBannerDisappears(){
		cy.xpath(this.xpath.successMessage,{ timeout: 10000 }).should('not.exist');
	}

	public static verifyErrorMessageBannerDisappears(){
		cy.xpath(this.xpath.errorMessageText,{ timeout: 10000 }).should('not.exist');
	}

	public static verifyDynamicSpanTextValueIsPresent(value: string) {
		cy.xpath(`//span[text()="${value}"]`)
			.should('exist');
	}

	public static verifUpdatedTextValueIsPresent(value: string) {
		cy.xpath(`//p[text()="${value}"]`)
			.should('exist');
	}

	public static verifyDynamicSpanTextValueIsNotPresent(value: string) {
		cy.xpath(`//span[text()="${value}"]`)
			.should('not.exist');
	}

	public static verifyDynamicPtagTextValueIsPresent(value: string) {
		cy.xpath(`//p[text()="${value}"]`)
			.should('exist');
	}

	public static verifyDynamicTdTextValueIsPresent(value: string) {
		cy.xpath(`//td[text()="${value}"]`)
			.should('exist');
	}

	public static verifyDynamicTdTextValueIsNotPresent(value: string) {
		cy.xpath(`//td[text()="${value}"]`)
			.should('not.exist');
	}
}