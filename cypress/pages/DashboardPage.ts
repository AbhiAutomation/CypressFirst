export class DashboardPage {

	private xpath = {
		policyHolderCount: '//div[contains(@class,"MuiDataGrid")]//p[contains(@class,"Pagination")]',
		openClaimsCount: '//h6[text()="Open Claims"]/following-sibling::h6',
		pendingClaimsCount: '//h6[text()="pending claims"]/following-sibling::h6',
		openSubclaimsCount: '//h6[text()="open subclaims"]/following-sibling::h6',
		totalInvoicesCount: '//h6[text()="Total Invoices"]/following-sibling::h6',
		settledInvoicesCount: '//h6[text()="settled"]/following-sibling::h6',
		pastDueInvoicesCount: '//h6[text()="past due"]/following-sibling::h6',
		onRiskPoliciesCount: '//h6[text()="On-risk Policies"]/following-sibling::h6',
		preIssuedCount: '//h6[text()="pre-issued"]/following-sibling::h6',
		expiredCount: '//h6[text()="expired"]/following-sibling::h6'
	};

	private css = {
		policyholderListFirstName: 'div[data-field*="first_name"][role="cell"]',
		policyholderListLastName: 'div[data-field*="last_name"][role="cell"]',
		policyholderListLocator: 'div[data-field="locator"][role="cell"] div'
	};

	getPolicyHolderCount() {
		return cy.xpath(this.xpath.policyHolderCount,{ timeout: 60000 });
	}

	getOpenClaimsCount() {
		return cy.xpath(this.xpath.openClaimsCount,{ timeout: 60000 });
	}

	getPendingClaimsCount() {
		return cy.xpath(this.xpath.pendingClaimsCount,{ timeout: 60000 });
	}

	getOpenSubclaimsCount() {
		return cy.xpath(this.xpath.openSubclaimsCount,{ timeout: 60000 });
	}

	getTotalInvoicesCount() {
		return cy.xpath(this.xpath.totalInvoicesCount,{ timeout: 60000 });
	}

	getSettledInvoicesCount() {
		return cy.xpath(this.xpath.settledInvoicesCount,{ timeout: 60000 });
	}

	getPastDueInvoicesCount() {
		return cy.xpath(this.xpath.pastDueInvoicesCount,{ timeout: 60000 });
	}

	getOnRiskPoliciesCount() {
		return cy.xpath(this.xpath.onRiskPoliciesCount,{ timeout: 120000 });
	}

	getPreIssuedCount() {
		return cy.xpath(this.xpath.preIssuedCount,{ timeout: 60000 });
	}

	getExpiredCount() {
		return cy.xpath(this.xpath.expiredCount,{ timeout: 60000 });
	}

	getFirstNameFromPolicyholderList() {
		return cy.get(this.css.policyholderListFirstName).eq(0);
	}

	getLastNameFromPolicyholderList() {
		return cy.get(this.css.policyholderListLastName).eq(0);
	}

	getLocatorFromPolicyholderList() {
		return cy.get(this.css.policyholderListLocator).eq(0);
	}
}