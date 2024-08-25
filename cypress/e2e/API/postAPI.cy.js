describe("", () => {


    it("", () => {

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "gowda",
                "job": "leader"
            }

        }).then(response => {

            expect(response.status).to.eq(201)

            cy.log(JSON.stringify(response))

            cy.writeFile("cypress/fixtures/postAPI.json", JSON.stringify(response))


            expect(response.allRequestResponses[0]["Response Body"]).to.have.property("name")
            expect(response.allRequestResponses[0]["Response Body"]).to.have.property("name", "gowda")

            expect(response.allRequestResponses[0]["Response Body"].name).to.equal("gowda")
            expect(response.allRequestResponses[0]["Response Body"].name).to.exist
            expect(response.allRequestResponses[0]["Response Body"]).not.to.be.empty









        })


    })
})