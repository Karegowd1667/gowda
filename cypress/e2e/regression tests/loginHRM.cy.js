import Addemployee from "../orenge HRM/POM.login details/pom.add employee.cy"
import login from "../orenge HRM/POM.login details/pom.login.cy"


describe('test scripts', () => {
    it('test case', () => {
        cy.visit('/web/index.php/auth/login')
        //cy.contains('img[alt="company-branding"]').should('be.visible')
        cy.get(login.username()).type('Admin', { delay: 0 });
        cy.get(login.lastname()).type('admin123', { delay: 0 });
        cy.get(login.loginBtn()).click()
       

    })

    it('valid username and invalid password', () =>  {
        cy.visit('/web/index.php/auth/login')
        //cy.contains('img[alt="company-branding"]').should('be.visible')
        cy.get(login.username()).type('Admin');
        cy.get(login.lastname()).type('admin764');
        cy.get(login.loginBtn()).click()
        cy.contains(login.loginerrorMessage).should('be.visible')

    })
    it('invalid username and valid password', () => {
        cy.visit('/web/index.php/auth/login')
        //cy.contains('img[alt="company-branding"]').should('be.visible')
        cy.get(login.username()).type('tredmin12312');
        cy.get(login.lastname()).type('admin123');
        cy.get(login.loginBtn()).click()
        cy.contains(login.loginerrorMessage).should('be.visible')

    })
    it('invalid username and invalid password', () => {
        cy.visit('/web/index.php/auth/login')
        //cy.contains('img[alt="company-branding"]').should('be.visible')
        cy.get(login.username()).type('ddmin123');
        cy.get(login.lastname()).type('ftddmin12321');
        cy.get(login.loginBtn()).click()
        cy.contains(login.loginerrorMessage).should('be.visible')
 
    })

})