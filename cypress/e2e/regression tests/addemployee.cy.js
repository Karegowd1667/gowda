
import Addemployee from "../orenge HRM/POM.login details/pom.add employee.cy"
import login from "../orenge HRM/POM.login details/pom.login.cy"

describe('test scripts', () => {
    it('test case', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get(login.username()).type(Cypress.env ('username'))
        cy.get(login.lastname()).type(Cypress.env('password'))
        cy.get(login.loginBtn()).click()
        cy.contains(Addemployee.Timework()).should ('be.visible')
        cy.get(Addemployee.PIM()).click()
        cy.contains(Addemployee.addemployee()).click()
        cy.get(Addemployee.firstname()).type('karegowd')
        cy.get(Addemployee.lastname()).type('gowd')
        let r = (Math.random() + 1).toString(36).substring('7')
        cy.get(Addemployee.employeeid()).last().clear().type(r)
        cy.get(Addemployee.savebutton()).click()
        cy.contains(Addemployee.successfulmessage()).should('be.visible')
    })
})
