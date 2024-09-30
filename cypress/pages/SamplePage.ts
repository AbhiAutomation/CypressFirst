
export class SamplePage{
 
    private xpath = {
        logoLinkedin: "//a[@href='https://www.linkedin.com/company/ultimate-qa']",
        loginLink: "//ul[@id='menu-main-menu']/li[@id='menu-item-217945']",
        ultimateQaLink: "//a[text()='Big page with many elements']"
    }


    clicUltimateQaLink()
    {
     cy.xpath(this.xpath.ultimateQaLink).click();
    }
    
    getLoginLink(){
     return  cy.xpath(this.xpath.loginLink)
    }
    clickLoginLink()
    {
     cy.xpath(this.xpath.loginLink).click();
    }
    

}