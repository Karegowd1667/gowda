describe("playwright", () => {
    it("selenium", () => {

        cy.visit("https://practice.automationtesting.in/")
        cy.get('a[data-product_id="160"]').click()
        //cy.get('span[class="amount"]').should("be.visible")
        cy.contains('View Basket').click()
        cy.contains('Proceed to Checkout').click()
        cy.get('#billing_first_name').type('mamatha')
        cy.get('#billing_last_name').type('MC')
        cy.get('#billing_company').type('Cap geminy')
        cy.get("#billing_email").type("mcmamatha6665@gmail.com")
        cy.get('#billing_phone').type('1234564546')
        cy.get('div[id="s2id_billing_country"]>a>span:nth-child(3)').click()
        cy.get('#select2-results-1>li:nth-child(103)').click()
        cy.get('#billing_address_1').first().type("MEI Layout,17th cross")
        cy.get("#billing_address_2").first().type("DBS Technologies")
        cy.get("#billing_city").first().type("bengaluru")
        cy.get("#s2id_billing_state>a>span:nth-child(3)").click()
        cy.get("#select2-drop>ul>li:nth-child(1)").click()
        cy.get("#billing_postcode").first().type("515271")
        cy.get("#payment_method_cod").check()
        cy.get("#place_order").click()
        cy.contains("510.00") .should("be.visible")
        cy.contains("Thank you. Your order has been received.").should("be.visible")
        

    })




})
