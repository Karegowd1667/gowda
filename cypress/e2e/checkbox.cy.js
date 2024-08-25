describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {
  
      cy.wait(5000)
  
      cy.get('input[type="checkbox"]').check()
      cy.wait(5000)
  
      cy.get('input[type="checkbox"]').uncheck(["CSS", "PHP"])
  
      cy.wait(5000)
  
      cy.get('input[type="checkbox"]').check(["CSS", "PHP"])
  
      cy.xpath("//input[@type='checkbox']").should("have.length", 7)
    })
})