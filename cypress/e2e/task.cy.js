
describe('Sweet Shop Basket Tests', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false;
      });
      

    const siteUrl = 'https://sweetshop.netlify.app';

    before(() => {
       
        cy.visit(siteUrl);
    });
    
    it.only('Add 4 products with different quantities to the basket', () =>    {
        
        cy.get('a[data-id="1"]').click();

        cy.get('a[data-id="2"]').click();


        cy.get('a[data-id="3"]').click();


        cy.get('a[data-id="4"]').click();

        cy.get("a.nav-link[href='/basket']:contains('Basket')").click({force:true})

        cy.contains('Sherbert Straws').should('be.visible');
        cy.contains('Strawberry Bon Bons').should('be.visible');
        cy.contains('Chocolate Cups').should('be.visible');
        cy.contains('Sherbet Discs').should('be.visible');
        cy.contains("£3.70").should("be.visible")
    
    
        let prices = {
          product1: 0.75, 
          product2: 1.00,
          product3: 1.00,
          product4: 0.95
        };
        
        let quantities = {
          product1: 1, 
          product2: 1,
          product3: 1,
          product4: 1
        };
        
        let totalPrice = (prices.product1 * quantities.product1) + 
                         (prices.product2 * quantities.product1) + 
                         (prices.product3 * quantities.product1) + 
                         (prices.product4 * quantities.product1);
        
        
        cy.get("a.nav-link[href='/basket']:contains('Basket')", { timeout: 10000 }).invoke('text').then((text) => {
          const displayedTotal = parseFloat(text.replace('£', '').trim()); 
          expect(displayedTotal).to.closeTo(totalPrice,3.70); 
        });
      
      

    
        
        cy.get("#exampleRadios2").check({force:true});

       
        cy.contains('£NaN').should('be.visible');
    
    
        cy.get('#name').type('hanumanth');
        cy.get('#name').last().type('naik');
        cy.get('#email').type("hanumanthnaik123@gmail.com");
        cy.get('#address').type('banglore');
        cy.get('#address2').type('8th mile');
        cy.get('#country').select(1)
        cy.get('#city').select(1)
        cy.get('#zip').type("515171")
        cy.get('#cc-name').type('H naik');
        cy.get('#cc-number').type('875314877239746');
        cy.get('#cc-expiration').type('8days');
        cy.get('#cc-cvv').type(-3)
        cy.get('button[type="submit"]').last().click()

  });
})